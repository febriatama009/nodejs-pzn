// The node:url module provides utilities for URL resolution and parsing.

import { URL } from "node:url";

const pzn = new URL(
  "https://www.udemy.com/course/nodejs-pemula-sampai-mahir/learn/lecture?belajar=belajar-node-js"
);

console.log(pzn.toString());
console.log(pzn.protocol);
console.log(pzn.host);
console.log(pzn.pathname);
console.log(pzn.searchParams);
