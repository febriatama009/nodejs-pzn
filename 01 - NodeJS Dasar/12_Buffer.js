//Buffer merupakan Object yang berisikan urutan Byte dengan panjang tetap
//buffer merupakan turunan dari tipe data Uint8Array
import { Buffer } from "node:buffer";

const buf = Buffer.from("Hello World", "utf8"); //encode "Hello World" into "utf8"

console.log(buf.toString("hex")); //decode to hex
console.log(buf.toString("base64")); //decode to base64

console.log(`------------------`);

console.log(Buffer.from("aswrftt", "utf8"));
console.log(Buffer.from("aswrftt", "base64"));
console.log(Buffer.from("qwertyuiop", "utf16le"));
