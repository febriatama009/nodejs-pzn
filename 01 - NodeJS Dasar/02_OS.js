import os from "node:os";

// console.log(os.availableParallelism()); //get error unknown
console.log(`the arch is is ${os.arch()}`); //return OS arch which the nodejs was compiled
// console.log(os.constants); // get error unknown
console.table(os.cpus()); //return array of object contains info about cpus logical core
// console.log(os.devNull); // get error unknown
//console.table(os.endianess()); //get error unknown
console.log(`Free memory is : `, os.freemem(), `kb`); //return the free memory that haven't used yet
//console.log(os.getPriority([1234])); //Returns the scheduling priority for the process specified by pid
console.log(`Location of Home Directory : ${os.homedir()}`); //return a string path of the current users directory
console.log(`Host Name : ${os.hostname()}`); //returns the hostname of the operation system as a string
console.log(`Average loading is : ${os.loadavg()} minutes`); //return array contain the 1,5 and 15 minutes of load average
console.log(`The OS Machine : ${os.machine()}`); //return the machine type
console.log(os.networkInterfaces()); //return network interface as object
console.log(`The platform using : ${os.platform()}`); //return the platform that was used
console.log(`Info about OS version released : ${os.release()}`);
console.log(`Temporary directory : ${os.tmpdir()}`);
console.log(`Total Memory : ${os.totalmem()} kb`);
console.log(`OS Type : ${os.type()}`);
console.log(`OS Uptime : ${os.uptime()} seconds`);
console.log(`OS Version : ${os.version()}`);
