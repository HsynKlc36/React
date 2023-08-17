import  { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import '../App.css'
import { init,subscribeChat ,subscribeInitialMessages} from '../sockedApi'
import { useChat } from '../context/ChatContext'
function Container() {
  const {setMessages}=useChat();//redisdeki mesajları set eden datayı yakaladık!
  useEffect(()=>{
  init();//Container ilk render edilidğinde(mount edildiğinde) sunucu ile socket aracılığıyla bağlantı kuruyorum!

  subscribeInitialMessages((messages)=>{
    setMessages(messages)
  })//redisteki tüm cache'lenmiş dataları yani mesajları set eder!bu function SocketApi içerisinde tanımlanmıştır

  subscribeChat(message=>{
    setMessages(prevState=>[...prevState,{message}])
  });//abone olduğu kanalı dinler ve alınan mesajları 
  },[])
  return (
    <div className='App'>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container