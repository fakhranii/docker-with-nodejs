# this is a baseImage we write it at first to help us creating other elements
FROM node:16 as development
# create a new folder called /app 
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# install nodejs packages which exists in the container
RUN npm install
# Copy the rest of the application code and put it inside the folder we did create "app"
COPY . /app/
# COPY . . ➡ this command can works too !
# Build the TypeScript code
RUN npm run build
# Define the network ports that this container will listen on at runtime
EXPOSE 4000
CMD ["npm", "run", "start:dev"] 



# this is a baseImage we write it at first to help us creating other elements
FROM node:16 as production
# create a new folder called /app 
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# install nodejs packages which exists in the container
RUN npm install --only=production
# Copy the rest of the application code and put it inside the folder we did create "app"
COPY . /app/
# COPY . . ➡ this command can works too !
# Build the TypeScript code
RUN npm run build
# Define the network ports that this container will listen on at runtime
EXPOSE 4000
#! Production mode
CMD ["node", "dist/index.js"]
