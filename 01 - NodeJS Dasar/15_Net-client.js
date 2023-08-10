import net from "net";

const connection = net.createConnection({ port: 3000, host: "localhost" });

setInterval(() => {
  connection.write("NodeJS\r\n");
}, 1000);

connection.addListener("data", (data) => {
  console.log(`Receive data from server : ${data.toString()}`);
});
