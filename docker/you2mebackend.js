'use strict';

// Things to fix:
// Implement fingerprinting
// dl progress only provided at the end of d/l

const backend="SQLServer";
//const chromaprint = require('chromaprint');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const express = require('express');
const fetch = require("node-fetch");
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const NodeID3 = require('node-id3-promise');
const os = require("os");
const requests = require("requests");
const sql = require('mssql');
const youtubedl = require('youtube-dl-exec');
const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const DEBUG = true;
const PROTOCOL = "https";
const MOVETOSERVERALLOWED=true;
const AUDIODESTINATIONPATH="/mnt/usb";
const VIDEODESTINATIONPATH="/mnt/usb";
const SOURCEPATH="/media/";
const OS=(os.type().includes("Windows") ? "Windows" : "Unix");

const config = {
     user: 'You2Me',
     password: '',
     server: 'SQLServer',
     database: 'You2Me',
     trustServerCertificate: true
};

//Default route doesn't need to return anything 
app.get('/', (req, res) => {
     res.send("");
});

app.get('/deleteDownloadFile', (req, res) => {
     const fileName=req.query.Filename;

     fs.unlink(fileName, function(err) {
          if (err) 
               res.send([`Unable to delete the file ${fileName}`]);
     }); 
});

app.get('/deleteDownloadProgress', (req, res) => {
     const currUUID=req.query.CurrUUID;

     if (currUUID == null) {
          res.send(["Error: DeleteDownloadProgress was called but not all audio arguments were provided"]);
          return;
     }
 
     const dlProgressFile=`${SOURCEPATH}${currUUID}.txt`;
     
     if (fs.existsSync(dlProgressFile)) {
          fs.unlink(dlProgressFile, function(err) {
               if (err) 
                    res.send([`Unable to delete the download progress`]);
          }); 
     }

     res.send([""]);
});

app.get('/downloadFile', (req, res) => {
     const allowMoveToServer=(req.query.AllowMovetoServer === "true");
     const audioFormat=(req.query.AudioFormat !== null ? req.query.AudioFormat : (req.query.IsAudioFormat === "true" ? "mp3" : null));
     const bitrate=(req.query.IsAudioFormat === "true" ? (req.query.Bitrate !== null ? req.query.Bitrate : "320k") : "");
     const currUUID=req.query.CurrUUID ?? null;
     const debugging=(req.query.Debugging === "true");
     const delimiter=(OS == "Windows" ? "\\" : "/");
     const domain=PROTOCOL + `://${req.hostname}`;
     const fileName=req.query.Filename ?? null;
     const isAudioFormat=(req.query.IsAudioFormat === "true");
     const isVideoFormat=(req.query.IsVideoFormat === "true");
     const isMP3Format=(req.query.Bitrate !== null);
     const URL=req.query.URL ?? null;
     const valid_audio_formats=['0','5','9','128k','192k','256k','320k','aac','flac','m4a','opus','vorbis','wav'];
     const valid_video_formats=['original','mp4','flv','ogg','webm','mkv','avi'];
     const videoFormat=(req.query.VideoFormat !== null ? req.query.VideoFormat : (req.query.IsVideoFormat === "true" ? "mp4" : null));
    
     if (URL === null) {
          res.send([`URL was not provided`]);
          return;
     }

     if (fileName === null) {
          res.send([`Filename was not provided`]);
          return;
     }
     
     if (currUUID === null) {
          res.send([`UUID was not provided`]);
          return;
     }

     if (isAudioFormat) {
          if (audioFormat === null) {
               res.send([`Audio format was not provided`]);
               return;
          }

          if (!valid_audio_formats.includes(audioFormat)) {
               res.send([`Invalid Audio Format`]);
               return;
          }

          if (audioFormat === "MP3" && bitrate === null) {
               res.send([`Bitrate was not provided`]);
               return;
          }
     }

     if (isVideoFormat) {
          if (videoFormat === null) {
               res.send([`Video format was not provided`]);
               return;
          }

          if (!valid_video_formats.includes(videoFormat)) {
               res.send([`Invalid Video Format`]);
               return;
          }
     }

     let newFileName="";
 
     // Build object for YTDL parameters
     const youtubedlParams = {}

     youtubedlParams['output']=SOURCEPATH + `${fileName}.%(ext)s`;
     
     if (isAudioFormat) {
          youtubedlParams["extract-audio"]=true;
          
          if (isMP3Format) {
                youtubedlParams["audio-format"]="mp3";
                youtubedlParams["audio-quality"]=bitrate;
          } else 
                youtubedlParams["audio-format"]=audioFormat;
     } else if (isVideoFormat) {
         if (videoFormat !== "original")
              youtubedlParams["format"]="best";
         else
              youtubedlParams["recode-video"]=videoFormat;
     }

/*

     const youtubedlParams = {}
     youtubedlParams['output']=SOURCEPATH + `${fileName}.%(ext)s`;

     youtubedl(URL,youtubedlParams).then(
          output => {
          },
          error => { 
               res.send(error);
          }
     );
*/
     /*
     // youtube.dl.raw sends lots of data to stdout.txt but doesnt download the file
     youtubedlParams["dumpSingleJson"]=true;

     const subprocess = youtubedl.raw(URL,youtubedlParams);
     
     console.log(`Running subprocess as ${subprocess.pid}`)

     // subprocess.stdout.pipe(fs.createWriteStream(`${currUUID}.txt`));
     subprocess.stdout.pipe(fs.createWriteStream('stdout.txt'))
     subprocess.stderr.pipe(fs.createWriteStream('stderr.txt'))
     
     setTimeout(subprocess.cancel, 30000)
     
     res.send("Done"); 
     */

     // YT DL as a promise
     youtubedl(URL,youtubedlParams).then(
          output => {
               fs.appendFile(SOURCEPATH + `${currUUID}.txt`, output, (err) => {
                    if (err) {
                         res.send([err]);
                    }
               });
               
               if (output.includes("100%")) {
                    youtubedlParams["get-filename"]=true;
 
                    youtubedl(URL,youtubedlParams).then(
                         output => {
                              if (isMP3Format) {
                                   try {
                                        if (output.includes(".webm") && !fs.existsSync(output)) 
                                             output=output.replace(".webm",".mkv");
                                   } catch(err) {
                                       console.log(`Something went to poop ${err}`);
                                   }

                                   newFileName=output.toString().trim();
                                   newFileName=newFileName.replace(".m4a",".mp3");
                                   newFileName=newFileName.replace(".webm",".mp3");
                                   newFileName=newFileName.replace(".web",".mp3");
                                   newFileName=newFileName.replace(".mkv",".mp3");

                                   if (fs.existsSync(SOURCEPATH + output)) {
                                        fs.rename(output,newFileName, function(err) {
                                             if (err) {
                                                  res.send([`Error: Failed to rename the file with the error ${err}`]);
                                             } else { // When you can, implement fingerprinting here instead of sending filename
                                                  res.send([newFileName]);
                                             }
                                        });
                                   } else {
                                        res.send([newFileName]);
                                   }
                              } else {
                                   res.send([output]);
                              }
                         },
                         error => { 
                              res.send([error]);
                         }
                   );
              }
          },
          error => { 
               res.send([error]);
          }
     );
});

app.get('/getAPIKey', (req, res) => {
     const SQL="EXEC GetAPIKey";
  
     execSQL(res,SQL,true);
});

app.get('/getDownloadProgress', (req, res) => {
     const currUUID=req.query.CurrUUID;

     exec(`tail -n 1 ` + SOURCEPATH + `${currUUID}.txt`,  (error, stdout, stderr) => {
          res.send(["it is " + stdout]);
          // console.log(stdout)
     });
});

app.get('/getFormats', (req, res) => {
     const SQL="SELECT Formats.*,FormatTypes.FormatTypeName FROM Formats JOIN FormatTypes ON FormatTypes.FormatTypeID=Formats.FormatTypeID ORDER BY FormatTypeName";
  
     execSQL(res,SQL,true);
});

app.get('/getSupportedURLs', (req, res) => {
     const url="http://ytdl-org.github.io/youtube-dl/supportedsites.html";
     
     (async () => {
        const response = await fetch(url);
        const body = await response.text();

        const dom = new JSDOM(body);

        const URLS = Array.from(dom.window.document.getElementsByTagName("li"), n => n.textContent)

        res.send(URLS);
     })();
     
});

app.get('/getThumbnail', (req, res) => {
     const URL=req.query.URL;

     const youtubedlParams = {}
     youtubedlParams['get-thumbnail']=URL;
     youtubedlParams['skip-download']=true;

     youtubedl(URL,youtubedlParams).then(
          output => {
               res.send([output]);
          },
          error => { 
               res.send([error]);
          }
     );
     /*const cmd="youtube-dl " + URL + " --get-thumbnail --skip-download";
      
     exec(cmd,  (error, stdout, stderr) => {
          if (!error)
               res.send(stdout); 
          else
               res.send(stderr);
     });*/
});

app.get('/moveFile', (req, res) => {
     const artist=req.query.Artist ?? null;
     const album=req.query.Album ?? null;
     const delimiter=(OS == "Windows" ? "\\" : "/");
     const domain=PROTOCOL + `://${req.hostname}`;
     const fileName=req.query.Filename ?? null;
     const isAudioFormat=(req.query.IsAudioFormat === "true");
     const isVideoFormat=(req.query.IsVideoFormat === "true");
     let audioDestinationPath=AUDIODESTINATIONPATH;
     let videoDestinationPath=VIDEODESTINATIONPATH;
     let pathBuildSucceeded=false;
     
     if (artist === null) {
          res.send([`Artist was not provided`]);
          return;
     }

     if (fileName === null) {
          res.send([`Filename was not provided`]);
          return;
     }

    if (isAudioFormat == false && isVideoFormat == false) {
          res.send([`Format must be specified`]);
          return;
     }

     if (isVideoFormat) {
          fs.rename(SOURCEPATH + fileName, `${videoDestionationPath}${fileName}`, function(err) {
               if (err) 
                    res.send(["Error: An error occurred while copying the video to the new location"]);
               else 
                    res.send(["The video has been moved to the new location"]);
               
               return;
          }); 
     } 
    
     if (artist != null) {
          if (!fs.existsSync(`${audioDestinationPath}${delimiter}${artist}`)) {
               fs.mkdir(`${audioDestinationPath}${delimiter}${artist}`, (err) => {
                    if (!err) 
                         audioDestinationPath=`${audioDestinationPath}${delimiter}${artist}${delimiter}`;
               });
          } else 
               audioDestinationPath=`${audioDestinationPath}${delimiter}${artist}${delimiter}`;
     }

     if (album != null) {
          if (!fs.existsSync(`${audioDestinationPath}${delimiter}${artist}${delimiter}${album}`)) {
               fs.mkdir(`${audioDestinationPath}${delimiter}${artist}${delimiter}${album}`, (err) => {
                    if (!err) 
                         audioDestinationPath=`${audioDestinationPath}${delimiter}${artist}${delimiter}${album}${delimiter}`;
               });
           } else 
                audioDestinationPath=`${audioDestinationPath}${delimiter}${artist}${delimiter}${album}${delimiter}`;
     }

     let newFileName=fileName.replace(SOURCEPATH,"");

     // Moving does not work because of an issue copying to a mounted file system so copy the file then delete it
     fs.copyFile(`${SOURCEPATH}${newFileName}`, `${audioDestinationPath}${newFileName}`, function(err) {
          if (err) 
               res.send([`Error: An error occurred while moving the file ${SOURCEPATH}${newFileName} to ${audioDestinationPath}${newFileName} with the error ${err}`]);
          else {
               fs.unlink(`${SOURCEPATH}${newFileName}`, function(err) {
                    if (err) 
                         console.log(`An error occurred deleting the file ${SOURCEPATH}${newFileName}`);
               });

               res.send([`${domain}${delimiter}${newFileName}`,newFileName]);
          }
     });
});

app.get('/writeID3Tags', (req, res) => {
     const artist=req.query.Artist ?? null;
     const album=req.query.Album ?? null;
     const delimiter=(OS == "Windows" ? "\\" : "/");
     const domain=PROTOCOL + `://${req.hostname}`;
     const fileName=(!req.query.Filename.includes(SOURCEPATH) ? SOURCEPATH : "") + req.query.Filename;
     const isLastStep=req.query.IsLastStep ?? null;
     const name=req.query.Name ?? null;
     const trackNum=req.query.TrackNum ?? null;
     const genre=req.query.Genre ?? null;
     const year=req.query.Year ?? null;

     if (artist === null) {
          res.send([`Error: Artist was not provided`]);
          return;
     }

     if (name === null) {
          res.send([`Error: Name was not provided`]);
          return;
     }

     if (fileName === null) {
          res.send([`Error: Filename was not provided`]);
          return;
     }

     const tags = {
          title: name,
          artist: artist,
          album: album,
          genre: genre,
          trackNumber: trackNum,
          year: year
     }

     NodeID3.write(tags, fileName)
          .then(() => {
               res.send([domain + fileName,`${(!fileName.includes(SOURCEPATH) ? SOURCEPATH : "")}${delimiter}${fileName}`,`Successfully wrote the ID3 tags`]);
          })
          .catch(err => {
               res.send([`Error 2 : Failed to write tags with the error ${err}`]);
          })
});

function execSQL(res,SQL,isQuery) {
     try {
          // connect to your database
          var connection = new Connection(config);

          sql.connect(config,function (err) {
               if (err) {
                    console.log(err);
                    res.send(`An error occurred connecting to the database with the error ${err}`);
               } else {
                    const request = new sql.Request();

                    request.query(SQL,function (err,data) {
                         if (err) res.send(err)

                         // if SQL is a query send records as a response
                         if (isQuery)
                              res.send(data.recordset);
                         else
                              res.send('');
                    });
               }
          });
     } catch(e) {
          console.log("Error!");
          res.send("Error is " + e);
     }
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
