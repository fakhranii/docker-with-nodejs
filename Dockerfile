# this is a baseImage we write it at first to help us creating other elements
FROM node:16

# create a new folder called /app 
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# install nodejs packages which exists in the container
RUN npm install

# Copy the rest of the application code
COPY . /app/

# Build the TypeScript code
RUN npm run build

# Define the network ports that this container will listen on at runtime
EXPOSE 4000

# execute a specific command
#! Production mode
# CMD ["node", "dist/index.js"]
#* dev mode
CMD ["npm", "run", "start:dev"] 
