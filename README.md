# ⭐ This Repo Is About Mastering Docker ⭐

## _Start With Docker_

- **The first step to start with docker is create file named `Dockerfile`.**
- **There is a helpful extension in vsc called `Docker` you have to install it, it will help you engage with docker.**
- **Once you did create an `image` you can create `container` from it.**

---

## _How To write Instructions In Dockerfile_

- **At the first `Dockerfile` is just a file to write some instructions in it, to tell `docker` how to works!, what dependencies are required in our application, how to build the application, how to run the application.**
- **`Container` is the output of running `Dockerfile`.**
- **People usually start the `Dockerfile` with this line ➡ `FROM baseImage`, `baseImage` is the thing that will give me the dependencies which my application requires, and the `baseImage` in our app is `node` so in our case we'll write `FROM node` we replaced `baseImage` with the image name which is `node` .**
- **if i wrote only `FROM node` it will give me the latest version of `node`, and i wanna specific version i should write `FROM node:14` for example.**
- **To create a `folder` inside `Dockerfile` we'll use this keyword ➡ `WORKDIR /name`.**
- **To copy a file content we'll use the keyword `COPY source dest` .. the source is the place we'll take the copy from and the dest is the place we'll past the copy in.**
- **To run a command inside `Dockerfile` ➡ `RUN command` and replace the command keyword with the command you wanna run.**
- **`EXPOSE` Define the network ports that this container will listen on at runtime .. for example `EXPOSE 3000` , its just for documentation ..**

---

## _How to Deal With `Docker` Via Terminal Commands_

- **`docker version`: Displays the Docker version installed.**

- **`docker info`: Shows detailed information about the Docker installation.**

- **`docker pull <image>`: Downloads a Docker image from a registry.**

- **`docker build -t <name> <path>`: Builds a Docker image from a Dockerfile in the specified path.**

- **`docker images`: Lists all Docker images on the local system.**

- **`docker rmi <image>`: Removes a Docker image.**

- **`docker tag <source-image> <target-image>`: Tags an image for easy reference.**

- **`docker run <image>`: Runs a command in a new container.**

- **`docker run --name containerName -v fullPathOfTheMainFile:/folderNameInDockerfile -d -p 4000:4000 node-docker-dev`: This is an instance of create a hot reload container, for example ➡ `docker run --name express-container -v d:\programming\projects\local-projects\nodejs-docker-app:/app -d -p 4000:4000 node-docker-dev.`.**

- **`docker run -d <image>`: Runs a container in detached mode (in the background).**

- **`docker run -it <image>`: Runs a container interactively with a terminal.**

- **`docker run --name <container-name> <image>`: Runs a container with a specified name.**

- **`docker ps`: Lists all running containers.**

- **`docker ps -a`: Lists all containers, including stopped ones.**

- **`docker stop <container>`: Stops a running container.**

- **`docker start <container>`: Starts a stopped container.**

- **`docker restart <container>`: Restarts a container.**

- **`docker kill <container>`: Kills a running container.**

- **`docker rm <container>`: Removes a container.**

- **`docker rm <container> -f`: Forces Remove a container .**

- **`docker exec -it <container> <command>`: Runs a command in a running container (interactive).**

- **`docker logs <container>`: Shows the logs from a container.**

- **`docker inspect <container>`: Displays detailed information about a container or image.**

- **`docker commit <container> <new-image-name>`: Creates a new image from a container's changes.**

- **`docker attach <container>`: Attaches to a running container's console.**

- **`docker volume create <volume-name>`: Creates a new volume.**

- **`docker volume ls`: Lists all volumes.**

- **`docker volume rm <volume-name>`: Removes a volume.**

- **`docker volume inspect <volume-name>`: Displays detailed information about a volume.**

- **`docker network create <network-name>`: Creates a new network.**

- **`docker network ls`: Lists all Docker networks.**

- **`docker network rm <network-name>`: Removes a Docker network.**

- **`docker network inspect <network-name>`: Displays detailed information about a network.**

- **`docker network connect <network> <container>`: Connects a container to a network.**

- **`docker network disconnect <network> <container>`: Disconnects a container from a network.**

- **`docker-compose up`: Builds, (re)creates, starts, and attaches to containers for a service.**

- **`docker-compose up -d`: Starts containers in detached mode.**

- **`docker-compose down`: Stops and removes containers, networks, images, and volumes.**

- **`docker-compose ps`: Lists containers in the current Docker Compose project.**

- **`docker-compose logs`: Shows logs from Docker Compose services.**

- **`docker-compose build`: Builds or rebuilds services.**

- **`docker-compose stop`: Stops running containers without removing them.**

- **`docker-compose start`: Starts existing containers.**

- **`docker-compose restart`: Restarts all the services defined in the docker-compose.yml.**

- **`docker login`: Logs in to a Docker registry.**

- **`docker logout`: Logs out from a Docker registry.**

- **`docker push <image>`: Uploads a local image to a Docker registry.**

- **`docker pull <image>`: Downloads an image from a Docker registry.**

- **`docker system df`: Shows disk usage by Docker.**

- **`docker system prune`: Cleans up unused Docker data (containers, images, networks, etc.).**

- **`docker system info`: Displays system-wide information about Docker.**

- **`docker stats`: Shows a live stream of resource usage statistics for containers.**

- **`docker save -o <file-name.tar> <image>`: Saves an image to a tar archive.**

- **`docker load -i <file-name.tar>`: Loads an image from a tar archive.**

### _Dockerfile Commands_

- **First to build an image of Dockerfile ➡ `docker build .` it works in case if i'm in the folder which include the Dokerfile.**

- **To name the Docker image to separate the iamges with names ➡ `docker build -t imageName .` .**

- **To see list of all images in your device ➡ `docker image ls`.**

- **To run the a container and name it, from `Docker Image` that we have ➡ `docker run --name containerName -p  forward port:internal port  imageName`.**

- **To see list of all running containers in your device ➡ `docker ps`.**

- **To stop container ➡ `docker stop containerName`.**

- **To remove a container ➡ `docker rm containerName -f`.**

- **`FROM <image>`: Specifies the base image for the Docker image.**

- **`LABEL <key>=<value>`: Adds metadata to the image in the form of key-value pairs.**

- **`ENV <key>=<value>`: Sets environment variables within the image.**

- **`RUN <command>`: Executes a command during the image build process, typically used for installing packages.**

- **`COPY <src> <dest>`: Copies files or directories from the host machine into the image.**

- **`ADD <src> <dest>`: Similar to `COPY`, but with additional features like auto-extracting compressed files.**

- **`WORKDIR <path>`: Sets the working directory for subsequent instructions in the Dockerfile.**

- **`CMD ["executable", "param1", "param2"]`: Specifies the default command to run when a container is started.**

- **`ENTRYPOINT ["executable", "param1", "param2"]`: Configures a container to run as an executable.**

- **`EXPOSE <port>`: Informs Docker that the container listens on the specified network ports at runtime.**

- **`VOLUME ["/data"]`: Creates a mount point with the specified path and marks it as holding externally mounted volumes or bind mounts.**

- **`USER <username or UID>`: Sets the user to use when running the image’s CMD or ENTRYPOINT.**

- **`ARG <key>[=<default value>]`: Defines a variable that users can pass at build-time to the builder with the docker build command.**

- **`ONBUILD <command>`: Adds a trigger instruction to be executed when the image is used as a base for another build.**

- **`HEALTHCHECK <options> CMD <command>`: Defines a command that runs to check that the container is healthy.**

- **`SHELL ["executable", "param1", "param2"]`: Allows the default shell used for the shell form of commands to be overridden.**

---

## _Difference Between Images & Containers_

### _Docker Images_

- **`Definition`: A Docker image is a lightweight, standalone, and immutable file that contains everything needed to run a piece of software, including the code, runtime, libraries, environment variables, and configuration files..**
- **`Read-Only`: Docker images are read-only templates used to create Docker containers. They do not change once they are created..**
- **`Layered Structure`: Docker images are made up of layers. Each layer represents a set of file changes (like an addition or modification), and layers are stacked on top of each other to form a single image. This layering allows Docker to reuse layers between images, which makes them more efficient in terms of storage and speed.**
- **`Storage`: Images are stored in the Docker registry (such as Docker Hub) or locally on your machine. They can be shared and distributed, making them highly portable.**
- **`Creation`: Docker images are typically built from a Dockerfile, which is a script that specifies the instructions needed to create the image.**

<!-- - **.** -->

### _Docker Containers_

- **`Definition`: A Docker container is a running instance of a Docker image. It is an isolated, lightweight, and executable software package that includes everything needed to run an application.**

- **`Mutable`: Unlike images, containers are mutable. When you run a container, it is created from an image and can be modified. Any changes made inside a container, such as modifying files or installing software, are specific to that container instance.**

- **`Runtime`: Containers provide a runtime environment where the application specified in the Docker image can be executed. They have their own isolated filesystem, network interfaces, and processes.**

- **`Lifecycle`: Containers have a lifecycle—they can be started, stopped, restarted, and removed. Once a container is stopped, it can be restarted or removed without affecting the original image.**

- **`Ephemeral`: Containers are often designed to be ephemeral, meaning they are created, used, and then discarded. Changes made to a container are not reflected back in the image unless explicitly committed to create a new image.**

### _Key Differences_

#### _Immutability vs. Mutability:_

- **Images are immutable and cannot be changed once created.**
- **Containers are mutable, and you can make changes to a running container.**

#### _Role:_

- **Images serve as the blueprint or template for creating containers.**
- **Containers are the actual running instances of images.**

#### _Storage:_

- **Images are stored as layers in the Docker registry or locally and can be reused.**
- **Containers use the image as a base and have their own writable layer where changes are made.**

#### _Creation_:

- **Images are built from Dockerfiles or created by committing changes from a container.**
- **Containers are created from images and run the software specified in the image.**

#### _Persistence_:

- **Images are persistent and can be stored and distributed.**
- **Containers are ephemeral by default, and changes made to them do not persist unless committed to an image or saved in volumes.**
