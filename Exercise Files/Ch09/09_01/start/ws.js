const webSocketServer = require("ws").Server;

let wss = new webSocketServer({ port: 3001 });

wss.on("connection", function(ws) {
  ws.on("message", function(message) {
    if (message === "exit") {
      ws.close();
    } else {
      wss.clients.forEach(client => {
        client.send(message);
      });
    }
  });

  ws.send("Welcome to cyber chat");
});
