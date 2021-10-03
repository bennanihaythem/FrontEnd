#Docker file front end Angular
FROM node:12.18.1 as build-step

#Create Working directory
WORKDIR ./app
#copy package*.json
COPY package.json ./
#update npm install dependencies
##installation Angular
RUN npm install -g @angular/cli@latest
##installation Bootstrap 
RUN npm install bootsrap
## installation Jquery
RUN npm install jquery
#copy project folder content 
COPY . .
#RUN project on production
RUN npm run build



