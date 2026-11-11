const http = require("http");

const sendReply = (res, text) => {
  return res.end(text);
};

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/") {
    sendReply(res, "Welcome to the cafe");
  } else if (path === "/menu") {
    sendReply(res, "Tea, coffee available");
  } else if (path === "/orders") {
    sendReply(res, "Orders are open till 9pm");
  } else {
    res.writeHead(404);
    sendReply(res, "Nothing here, go back to the cafe");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("cafe server running on port 4000");
});