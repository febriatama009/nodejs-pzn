import zlib from "zlib";
import fs from "fs";

//membaca file yang dicompress
const de_source = fs.readFileSync("zlib.js.txt");
console.log(de_source);

//decompress
const decompress = zlib.unzipSync(de_source);
console.log(decompress.toString());
