const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
//express Uygulaması Oluşturuluyor: express ile bir HTTP sunucusu oluşturuluyor. Bu sunucu daha sonra Socket.io ile birleştirilecek.
app.use(cors());
//CORS Ayarları: app.use(cors()) kodu ile CORS (Cross-Origin Resource Sharing) ayarları uygulanıyor. Bu, farklı kökenlere (origin) sahip istemcilerin sunucuya erişimini kontrol eder.

app.get("/", (req, res) => {
	res.send("hello");
});
//Kök Yolu İsteği: app.get("/", ...) kodu ile kök yolu (root path) için bir HTTP GET isteği ele alınıyor. Bu isteğe karşılık olarak "hello" yanıtı döndürülüyor. Bu adım, sunucunun temel çalıştığını göstermek için kullanılabilecek basit bir işlemdir.

let lastColor = "#282c34";

io.on("connection", (socket) => {
	console.log("bir kullanıcı bağlandı!");

	socket.emit("receive", lastColor);

	socket.on("newColor", (color) => {
		console.log(color);

		lastColor = color;
		io.emit("receive", color);
	});

	socket.on("disconnect", () => {
		console.log("Bir kullanıcı ayrıldı.");
	});
});
//io.on("connection", ...) kodu ile yeni bir Socket.io bağlantısı kurulduğunda çalışacak kod bloğu tanımlanıyor. Yeni bir kullanıcı bağlandığında "bir kullanıcı bağlandı!" mesajı yazdırılıyor.
//socket.emit("receive", lastColor);: Yeni bir bağlantı kurulduğunda, son kullanılan renk bilgisini bu bağlantıya gönderiliyor.
//socket.on("newColor", ...: "newColor" adlı bir olayı dinliyor. İstemciden gelen "newColor" olayında çalışacak kod bloğu. Yani istemci, "newColor" olayını tetiklediğinde (örneğin, yeni bir renk seçildiğinde), bu olayı dinleyen sunucu tarafındaki kod çalışacak.
//lastColor = color;: Gelen renk bilgisi "color" değişkenine atanıyor, böylece son kullanılan renk güncelleniyor.
//io.emit("receive", color);: Tüm bağlantılara (istemcilere) "receive" olayı ile yeni renk bilgisi gönderiliyor. Yani istemciler, "receive" olayını dinlediklerinde, güncellenen renk bilgisini alacaklar.
//Kullanıcı Ayrıldığında: socket.on("disconnect", ...) kodu, bir kullanıcı bağlantısının kesildiğinde çalışan kod bloğunu tanımlar. Kullanıcı ayrıldığında "Bir kullanıcı ayrıldı." mesajı yazdırılır.
http.listen(3001, () => console.log("Server is up 🚀 🚀"));
//Sunucu Başlatılıyor: Son olarak, http.listen(3001, ...) kodu ile sunucu belirtilen port numarasında dinlemeye başlıyor. "Server is up 🚀 🚀" mesajıyla sunucunun başladığına dair bir mesaj görüntüleniyor.