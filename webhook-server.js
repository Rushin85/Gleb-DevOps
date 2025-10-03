const http = require("http");
const { exec } = require("child_process");

const PORT = 4000; // you can choose any free port

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    // Pull latest code and reload PM2
    exec("cd ~/your-repo-name && git pull origin main && pm2 reload node-app", (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        return res.end("Deployment failed");
      }
      console.log(stdout);
      res.writeHead(200);
      res.end("Deployment successful ✅");
    });
  } else {
    res.writeHead(200);
    res.end("Webhook listener running");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Webhook server listening on port ${PORT}`);
});
