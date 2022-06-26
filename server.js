const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const { agentRequestStack, agentRetrieveStack } = require("./stackVersion");
// const { agentRequestQueue } = require("./queueVersion");

const port = 3070;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
    let htmlPath = path.join(__dirname, "home.html");
    res.statusCode = 200;
    displayFile(htmlPath);
  } else if (req.url === "sendQueue") {
    let htmlPath = path.join(__dirname, "formQueue.html");
    res.statusCode = 200;
    displayFile(htmlPath);
  } else if (req.url.match("/requestQueue")) {
    const form_data = url.parse(req.url, true).query;
    // From the newToken function, pass in the names from the form as functions parameters.
    const token = newToken(
      form_data.message,
      form_data.agentID,
      form_data.structureID
    );
    token.then((data) => {
      res.end(`New token was created!\n\n ${JSON.stringify(data, null, 2)}`);
    });
  } else if (req.url === "/retrieveQueue") {
    // function
    //
    //
  } else if (req.url === "/sendStack") {
    let htmlPath = path.join(__dirname, "formStack.html");
    res.statusCode = 200;
    displayFile(htmlPath);
  } else if (req.url.match("/requestStack")) {
    const form_data = url.parse(req.url, true).query;
    // From the newToken function, pass in the names from the form as functions parameters.
    const messageReq = agentRequestStack(
      form_data.message,
      form_data.agentID,
      form_data.structureID
    );
    messageReq.then((data) => {
      res.end(
        `Message Request Loud and Clear!\n\n ${JSON.stringify(data, null, 2)}`
      );
    });
  } else if (req.url === "/retrieveStack") {
    const messageRetrive = agentRetrieveStack();
    messageRetrive.then((data) => {
      res.end(JSON.stringify(data, null, 2));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }

  function displayFile(filename) {
    fs.readFile(filename, "UTF-8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        res.writeHead(res.statusCode, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(port, "localhost", () => {
  console.log(
    `Server is running on http://localhost:${port}; Ctrl-C to terminate...`
  );
});
