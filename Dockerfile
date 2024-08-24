# this is a baseImage we write it at first to help us creating other elements
FROM node:14

# create a new folder called /nodeApp 
WORKDIR /nodeApp

COPY package.json /nodeApp

# install nodejs packages which exists in the container
RUN npm install
# RUN npm install -g ts-node

# copy all (.) application content into nodeApp folder
COPY . /nodeApp/

# Define the network ports that this container will listen on at runtime
EXPOSE 4000

# execute a specific command
CMD [ "npm","start" ]