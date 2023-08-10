// The node:util module supports the needs of Node.js internal APIs. Many of the utilities are useful for application and module developers as well.

import util from "node:util";

const str = util.format("%s:%s", "foo", "bar");
const inter = util.format(1, 2, 3);
const nums = util.format("%i:%i", 20, 30);

const per = { firstName: "Node", lastName: "JS" };
console.log(util.format("Person : %j", per));

console.log(str, inter, nums);
