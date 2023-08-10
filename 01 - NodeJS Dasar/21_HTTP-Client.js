//melakukan http request ke server
import https from "https";

const endpoint = "https://eo3wtp659mk309m.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.log(`Receive " ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Node",
  lastName: "JS",
});

request.write(body);
request.end();
