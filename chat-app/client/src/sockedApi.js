import io from 'socket.io-client';// npm add socket.io-client diyerek yükleyip ardından kullanıyoruz.

let socket;
export const init=()=>{
    console.log('sunucuya bağlanılıyor...');
    socket=io('http://localhost:3000',{
        transports:['websocket'],
    });//backend'den bağlantı yapacağımız port
    socket.on('connect',()=>console.log('sunucuya bağlantı başarıyla gerçekleşti.'))
   
}

export const sendMessage=(message)=>{
    if(socket) socket.emit('new-message',message)
};//kanala mesaj göndermeye yarar!


export const subscribeChat=(cb)=>{
    if(!socket) return;

    socket.on('receive-message',(message)=>{
        console.log('yeni mesaj var',message)
        cb(message);
    })
};//kanala abone olup dinleme işlemi yapar!

export const subscribeInitialMessages=(cb)=>{
    if(!socket) return;

    socket.on('message-list',(messages)=>{
        console.log('initial',messages)
        cb(messages);
    })
};//kanala abone olup dinleme işlemi yapar!

