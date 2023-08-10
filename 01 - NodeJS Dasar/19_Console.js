import { Console } from "console";
import fs from "fs";
import os from "os";

//membuat file
const logFile = fs.createWriteStream("app.log");

//masukkan Class Console ke variable
const anjenk = new Console({
  stdout: logFile, //stdout dikirim ke variable logFile
  stderr: logFile,
});

//anjenk disini === Console
anjenk.info("Hello Word");
anjenk.error("Anjay!");
anjenk.table(os.cpus());
