import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.method);
  //   console.info(request.statuscode);
  //   console.table(request.headers);
  console.log(request.url);

  response.write("Hello http server");
  response.end();
});

server.listen(3000);
