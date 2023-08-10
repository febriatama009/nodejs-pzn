//standard library utk menggunakan thread ketika mengeksekusi javascript secara paralel
//Ini memungkinkan Anda menjalankan kode JavaScript dalam thread terpisah di dalam satu proses Node.js. Penggunaan Worker Threads di Node.js sangat berguna untuk mengatasi tugas-tugas yang memakan waktu lama tanpa menghambat eksekusi kode utama.
//digunakan pada program yang membutuhkan kemampuan CPU yang intensif. Seperti Kompresi dan Enkripsi

import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./20_worker.js");
const worker2 = new Worker("./20_worker.js");

worker1.addListener("message", (message) => {
  console.log(`Thread ${threadId} receive message from worker 1 : ${message}`);
});

worker2.addListener("message", (message) => {
  console.log(`Thread ${threadId} receive message from worker 2 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(20);
