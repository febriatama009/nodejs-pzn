// A stream is an abstract interface for working with streaming data in Node.js.

// There are four fundamental stream types within Node.js:

// Writable: streams to which data can be written (for example, fs.createWriteStream()).
// Readable: streams from which data can be read (for example, fs.createReadStream()).
// Duplex: streams that are both Readable and Writable (for example, net.Socket).
// Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).

import fs from "fs";

//tulis stream
const writer = fs.createWriteStream("target.log");
writer.write("Coba");
writer.write(" menulis kode");
writer.write(" node js");
writer.close();

//baca stream yang dikirim
const reader = fs.createReadStream("target.log");
reader.on("data", (data) => {
  console.log(data.toString());
  reader.close();
});
