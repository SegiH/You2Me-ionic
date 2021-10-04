FROM node:14

COPY you2mebackend.js /
COPY package.json /

RUN npm install
RUN apt update && apt install -y ffmpeg

EXPOSE 8080

CMD [ "node" , "/you2mebackend.js" ]
