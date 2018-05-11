# frida-in-the-middle-demo

A demo application for https://github.com/lapinek/frida-in-the-middle.git

The aforementioned middleware allows for authentication against ForgeRock IDM 5.5 API and its repo provides details on implementation. This is a materialized example.

# Install and run

    git clone https://github.com/lapinek/frida-in-the-middle-demo.git

    cd frida-in-the-middle-demo

    npm install

    npm start

    http://localhost:4040

# Docker

In a(n empty) directory...

Get the application code

    git clone https://github.com/lapinek/frida-in-the-middle-demo.git

Optionally, [Install and run](https://github.com/lapinek/frida-in-the-middle-demo#install-and-run)

Create Dockerfile (text file)

    FROM node:8-slim

    WORKDIR .

    COPY . .

    RUN cd frida-in-the-middle-demo && npm install

    EXPOSE 4040

    CMD ["npm", "start", "--prefix", "frida-in-the-middle-demo"]



Optionally create .dockerignore file

    **/node_modules

Build the image

    $ docker build -t frida-in-the-middle-demo .

Run the container

    $ docker run -p 4040:4040 frida-in-the-middle-demo

    > frida-in-the-middle-demo@0.0.0 start /frida-in-the-middle-demo
    > node index.js

    listening: 4040

Run the application

    http://localhost:4040
