//library utk menjalankan proses nodejs sekaligus
//sangat cocok ketika menggunakan CPU yang multicore
//terdapat 2 jenis, yaitu :
// -- Cluster Primary : digunakan sbg koordinator atau manajer untuk Para Worker
// -- Cluster Worker : aplikasi yang menjalankan tugas nya

import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  console.log(`Start Cluster Primary id : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    //menjalankan worker
    cluster.fork();
  }

  cluster.addListener("exit", (worker) => {
    console.log(`Worker - ${worker.id} is exited`);
    cluster.fork(); //jalankan ulang process
  });
}

if (cluster.isWorker) {
  const server = http.createServer((request, response) => {
    response.write(`Response dari process ${process.pid}`);
    response.end();
    process.exit();
  });

  server.listen(3000);
  console.log(`Start Cluster Worker id : ${process.pid}`);
}
