//The node:net module provides an asynchronous network API for creating stream-based TCP or IPC servers (net.createServer()) and clients (net.createConnection()).

//standard library yang bisa digunakan untuk membuat network client dan server berbasis TCP

import net from "net";

const server = net.createServer((client) => {
  console.log(`Client connected!`);
  client.addListener("data", (data) => {
    console.log(`Receive data : ${data.toString()}`);
    client.write(`Data yang dikirim :  ${data.toString()}\r\n`);
  });
});

server.listen(3000, "localhost");
