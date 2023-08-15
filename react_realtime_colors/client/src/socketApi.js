import io from 'socket.io-client';// npm add socket.io-client diyerek yükleyip ardından kullanıyoruz.

let socket;
export const init=()=>{
    console.log('sunucuya bağlanılıyor...');
    socket=io('http://localhost:3001',{
        transports:['websocket'],
    });//backend'den bağlantı yapacağımız port
    socket.on('connect',()=>console.log('sunucuya bağlantı başarıyla gerçekleşti.'))
   
}

export const send=(color)=>{
    socket.emit('newColor',color);//client ile server arasında data taşınmasını sağlar.Fakat kanal ve kanala göndereceğiniz datalar uyuşmalıdır karşılıklı!backend tarafından hangi kanalda hangi datayla yakalamanız gerektiğini incelemelisiniz!
};
export const  subscribe=(cb)=>{
    socket.on('receive',(color)=>{
        console.log(color);
        cb(color)
    });
};//abone oluruz ve receive ile dinleme yaparız! değişen color'ı tüm aboneler yakalar!
//Not:sunucuya bağlandığımız farklı bir terminal açtık ve oradan backend tarafına backend klasörü dizini üzerinden npm start ile ayağa kaldırdık!Yani bu projede bir backend birde client tarafımız var!
