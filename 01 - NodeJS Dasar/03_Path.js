//standard library yang digunakan utk bekerja dgn lokasi file/direktori
import path from "node:path";

const file = "/foo/bar/baz/asdf/quux.html";
const filez = ["/foo", "bar", "baz", "asdf", "quux.html"];

// console.log(path.basename(path[, suffix]));

//path.delimiter
console.log(process.env.PATH);
console.log(path.dirname(file));
console.log(path.extname(file));
console.log(path.format({ root: "/home", name: "file", ext: ".txt" }));
console.log(path.isAbsolute(file)); //return boolean
console.log(path.join("/foo", "bar", "baz", "asdf", "quux.html"));
console.log(path.normalize(file));
console.log(path.parse(file));
// path.posix;
console.log(path.relative(file, "/data/orandea/impl/bbb"));
// path.resolve([...paths]);
// path.sep;
// path.toNamespacedPath(path);
// path.win32;
