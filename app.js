const http = require("http");

const PORT = 3000;
const HOST = '0.0.0.0'; // allow external access

// Create the server first
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js running on DigitalOcean!");
});

// Then start listening
server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

