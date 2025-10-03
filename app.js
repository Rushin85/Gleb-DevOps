const http = require("http");

const PORT = 3000;
const HOST = '0.0.0.0'; // allow external access

// Create the server first
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head>
        <title>Welcome to Node.js!</title>
        <style>
          body { 
            font-family: 'Courier New', monospace; 
            background-color: #1e1e1e; 
            color: #00ff00; 
            padding: 50px; 
          }
          h1 { font-size: 2.5em; }
          p { font-size: 1.2em; }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome to the Node.js Server!</h1>
        <p>
          Hey there, fearless traveler! You've just landed on a server powered by pure JavaScript energy. 
          Prepare for a journey full of asynchronous adventures, event-loop twists, and npm package surprises.
        </p>
        <p>
          Sit back, grab your coffee ☕, and watch your requests get handled with lightning speed ⚡. 
          Remember, here on the Node.js spaceship, bugs are just features in disguise 🐛➡️✨.
        </p>
        <p>
          Enjoy your stay, and may your code always run without errors! 🖖
        </p>
      </body>
    </html>
  `);
});


// Then start listening
server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

