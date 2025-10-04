const http = require("http"); // 1
const { exec } = require("child_process"); // 2

const PORT = 4000; // 3

// Create the webhook server
const server = http.createServer((req, res) => { // 4 - server.createServer start
  if (req.method === "POST") { // 5
    let body = ""; // 6

    req.on("data", chunk => { // 7
      body += chunk.toString(); // 8
    }); // 7 close

    req.on("end", () => { // 9
      console.log("🚀 Received webhook from GitHub"); // 10

      res.writeHead(200, { "Content-Type": "text/plain" }); // 11
      res.end("Deployment started"); // 12

      // Deployment command
      exec( // 13
        "cd /root/Gleb-DevOps && git pull origin main && pm2 reload node-app", // 14
        (error, stdout, stderr) => { // 15
          if (error) { // 16
            console.error(`❌ Error: ${error.message}`); // 17
            return; // 18
          } // 16 close
          if (stderr) console.error(`⚠️ stderr: ${stderr}`); // 19
          console.log(`✅ stdout: ${stdout}`); // 20
        } // 15 close callback
      ); // 13 close exec
    }); // 9 close req.on("end")
  } else { // 5 else
    res.writeHead(200, { "Content-Type": "text/plain" }); // 21
    res.end("Webhook server is running!"); // 22
  } // 5 else close
}); // 4 close server.createServer

// Start the server
server.listen(PORT, "0.0.0.0", () => { // 23
  console.log(`✅ Webhook server listening on port ${PORT}`); // 24
}); // 23 close listen
