const http = require("http");
const { exec } = require("child_process");

const PORT = 4000;

// Create the webhook server
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("🚀 Received webhook from GitHub");

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Deployment started");

      exec(
        "cd /root/Gleb-DevOps && git pull origin main && pm2 reload node-app",
        (error, stdout, stderr) => {
          if (error) {
            console.error(`❌ Error: ${error.message}`);
            return;
          }
          if (stderr) console.error(`⚠️ stderr: ${stderr}`);
          console.log(`✅ stdout: ${stdout}`);
        }
      );
    });
   else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Webhook server is running!");
  }
});

// Start the server
server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Webhook server listening on port ${PORT}`);
});
