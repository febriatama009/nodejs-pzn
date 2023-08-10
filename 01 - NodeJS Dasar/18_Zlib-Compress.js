// The node:zlib module provides compression functionality implemented using Gzip, Deflate/Inflate, and Brotli.
//library untuk melakukan kompresi dgn Gzip

import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("18_Zlib-Compress.js");

//compress file
const compress = zlib.gzipSync(source);

//write ke file baru
fs.writeFileSync("zlib.js.txt", compress);
