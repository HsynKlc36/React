import  { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import '../App.css'
import { init,subscribeChat ,subscribeInitialMessages} from '../sockedApi'
import { useChat } from '../context/ChatContext'
function Container() {
  const {setMessages}=useChat();
  useEffect(()=>{
  init();//backend ile socket aracılığıyla bağlantı kuruyorum!

  subscribeInitialMessages((messages)=>{
    setMessages(messages)
  })

  subscribeChat(message=>{
    setMessages(prevState=>[...prevState,{message}])
  });//abone olduğu kanalı dinler ve alınan mesajları k
  },[])
  return (
    <div className='App'>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container