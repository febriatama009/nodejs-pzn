// Promises API
// Class: FileHandle

import fs from "fs/promises";

const buffer = await fs.readFile("server.js");

// console.log(buffer.toString());

await fs.writeFile("helloWorld.js", buffer);

// filehandle.appendFile(data[(txt, options)]);
// filehandle.chmod(mode);
// filehandle.chown(uid, gid);
// filehandle.close();
// filehandle.createReadStream([options]);
// filehandle.createWriteStream([options]);
// filehandle.datasync();
// filehandle.fd;
// filehandle.read(buffer, offset, length, position);
// filehandle.read([options]);
// filehandle.read(buffer[(txt, options)]);
// filehandle.readableWebStream(options);

// filehandle.readLines([options]);
// filehandle.readv(buffers[(txt, position)]);
// filehandle.stat([options]);
// filehandle.sync();
// filehandle.truncate(len);
// filehandle.utimes(atime, mtime);
// filehandle.write(buffer, offset[(txt, length[(txt, position)])]);
// filehandle.write(buffer[(txt, options)]);
// filehandle.write(string[(txt, position[(txt, encoding)])]);

// filehandle.writev(buffers[(txt, position)]);
