const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const Messages = require("./lib/Messages");

app.use(cors());

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});

	socket.on("new-message", (message) => {
		console.log(message);
		Messages.upsert({ message });//redise yazar

		socket.broadcast.emit("receive-message", message);//diğer kullanıcıların da bu mesajı almasını sağlar!
	});


	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});//burada veritabanı için redis'i dinler ve client' tan veriyi almak içinse 3000 portunu dinler cünkü socket ile client'a 3000 portu üzerinden bağlanır.