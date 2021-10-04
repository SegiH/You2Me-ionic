# You2Me Installation

### Installation

You2Me is made up of 2 applications that need to be run in order for You2Me to work. You2Me-frontend is the part of the app that you interact with and You2Me-backend is the backend service. 

The front end can be run as a web application hosted on an Apache or Nginx web server, run as a Docker container or as an Android or iOS application. The settings in You2Me-frontend has an ability for you to enter and connect to any publicly accessible You2Me back end service by entering the backend URL. You can run your own back end service or connect to someone else' You2Me back end service.

The easiest way to run You2Me is to use the provided Docker compose script `you2me.docker-compose.yml` located in `docker/` which will pull the front and back end images of You2Me from [Docker Hub](https://hub.docker.com/) that I build and push to Docker Hub regularly or you can build You2Me yourself. 

#### Use Docker front and back end images from Docker Hub
1. Edit `docker/you2me.docker-compose.yml` and change `YourNetworkName` on line 5 to your actual custom network name in Docker ([How to create a network in Docker](https://docs.docker.com/engine/reference/commandline/network_create/)). This should not be `host`.
1. If you want to be able to move the file to your server, change the line after volumes:
   so that the section before the colon points to the location of your media
   `- /root/media/Music/Unsorted:/mnt/usb`
1. If you do not need to move the file to your own server, delete the `volumes:` line and the line directly below it
1. Run the command `docker-compose -f docker/you2me.docker-compose.yml up -d` to create the You2Me container.
1. Connect to your You2Me instance and enter the back end URL in the Settings.

#### You2Me front end application
1. Install [Node.js](https://nodejs.org/en/) which includes npm.
1. Install the [Ionic](https://ionicframework.com/) cli: `npm install -g @ionic/cli native-run cordova-res`
1. Run `npm install` - This will install all of the missing dependencies.
1. Run `ionic build` - This will build the You2Me application in a folder called www. You can copy this folder to your web server if you want to self host the front end.
1. If you want to build the Android app:
    a. Run `ionic cap add android`
    b. When the Android build completes, Open the android folder in Android Studio and build the application.
1. If you want to build the iOS app:
      a. Run `ionic cap add android`
      b. When the ios build completes, Open the ios folder in XCode and build the application.

### You2Me back end application  
The back end can be run as a Docker container or as a Node.js web server with you2mebackend.js

To run the backend on Docker:
1. From the main directory of the source code, build the back end image by running: `docker build docker/ -t you2mebackend:latest`
1. Edit `docker/you2mebackend.yml` and change `YourNetworkName` on line 5 to your actual custom network name in Docker ([How to create a network in Docker](https://docs.docker.com/engine/reference/commandline/network_create/)). This should not be `host`.
1. If you want to be able to move the file to your server, change the line after volumes:
   so that the section before the colon points to the location of your media
   `- /root/media/Music/Unsorted:/mnt/usb`
1. If you do not need to move the file to your own server, delete the `volumes:` line and the line directly below it
1. Run the command `docker-compose -f you2me.docker-compose.yml up -d` to create the You2Me container.

To run the backend on your own server:
1. Set up a Node.js server 
1. Copy `package.json` and `you2mebackend.js` to the Node.js web server
1. Run `npm install` to install missing dependencies
1. Create /media and give this folder write permissions
1. Run node you2mebackend.js as the web server script

### URL Parameters
You can supply default values for all of the fields by providing URL parameters.

The URL parameters are as follows: URL, Name and Format. 

To add a URL parameter use "?" for the first URL parameter and "&" for every parameter after that in the format parametername=value. 

To specify Beck as the artist and Odelay as the album as a URL parameter use. `http://www.example.com/You2Me?Name=Uptown%20Funk&format=320k` For audio or video formats, supply one of the values above such as `Format=original` for video without reencoding or `Format=320k` for 320kbps mp3 audio.

### You2Me Bookmark

You2Me supports a bookmark which will automatically load You2Me in a new tab with the URL of the site that you want to use You2Me with. Create a bookmark in your browsers' toolbar with the name Send to You2Me and the following JavaScript code as the URL of the bookmark:

```
javascript:window.open('https://mysite.com/You2Me/?URL='+window.location.toString()+'&Name='+document.title+'&Format=320k','_parent','');event.preventDefault();
```

Don't forget to replace `https://mysite.com/You2Me` with the full URL of your instance of You2Me. Now visit a supported site like YouTube and click on the bookmark. A new You2Me tab/window will open with the URL already filled in. 

When you use this shortcut, you do not need to enter the artist and or track title. This application uses fingerprinting to try and automatically identify the song. If it cannot identify the track, you will be prompted to enter the artist and song name.

### Troubleshooting

If you get an error downloading the track, there are a few things that you can do to figure out what is causing the problem.

##### Docker Troubleshooting
1. Make sure that youtube-dl is up to date. It gets updated fairly often and is usually the most common reason that this app  will stop working. Run the command `docker exec You2Me pip install --upgrade youtube_dl`.
2. Run the following command to test youtube-dl in your You2Me Docker container `docker exec -it You2me youtube-dl URL -x --audio-format mp3 --audio-quality 320` where URL is the full URL of the site that you want to download. Make sure that the command completes and generates an mp3.

##### Self installed
1. Make sure that youtube-dl is up to date. It gets updated fairly often and is usually the most common reason that this app  will stop working. Run the command `sudo pip install --upgrade youtube_dl` to upgrade YouTube-dl. 
1. Make sure that youtube-dl has the right permissions by running `chmod a+rx /usr/local/bin/youtube-dl` (Change the path if youtube-dl if it is located in a different location).
1. Make sure that the media folder has write permissions. 
1. Run the following command in a terminal: `youtube-dl URL -x --audio-format mp3 --audio-quality 320` where URL is the full URL of the site that you want to download. Make sure that the command completes and generates an mp3.
1. If you get the error "ERROR: WARNING: unable to obtain file audio codec with ffprobe" when running the step above, make sure that ffprobe is working correctly by running `ffprobe -version`. If you are using Plex and get this error, it is caused by the envirnment variable `LD_LIBRARY_PATH=/usr/lib/plexmediaserver`. You can verify this by running the command export and looking for this variable. If you see this path, remove it by editing /etc/environment and add # in front of this line.
1. Make sure that the youtube URL is in the format `https://www.youtube.com/watch?v=<YOUTUBEID>` where `<YOUTUBEID>` is random letters and number.
1. When using the Angular dev server, downloading won't work unless you allow CORS Headers. You will need to look up how to do to this for your web server. For Traefik you would add something like this: (Replace MY-NETWORK-NAME with your network and you2me.mysite.com with your actual domain in 2 places )
`
labels:
     - "traefik.enable=true"
     - "traefik.network=MY-NETWORK-NAME"
     - "traefik.http.routers.you2me.rule=Host(`you2me.mysite.com`)"
     - "traefik.http.routers.you2me.entrypoints=websecure"
     - "traefik.http.routers.you2me.tls.certresolver=letsencryptresolver"
     - "traefik.http.routers.you2me.middlewares=you2meMiddleware"
     - "traefik.http.middlewares.you2meMiddleware.headers.accesscontrolallowmethods=GET,OPTIONS,PUT"
     - "traefik.http.middlewares.you2meMiddleware.headers.accesscontrolalloworiginlist=https://you2me.mysite.com,http://localhost:4200"
`

Please submit a new issue for bug reports or feature requests.