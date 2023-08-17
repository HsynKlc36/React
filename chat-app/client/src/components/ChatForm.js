import {useState} from 'react'
import styles from './styles.module.css'
import { sendMessage } from '../sockedApi'
import {useChat} from '../context/ChatContext'
function ChatForm() {
  const [message,setMessage]=useState('')
  const {setMessages}=useChat();
  const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(message);
   setMessages((prevState)=>[...prevState,{message,fromMe:true}])// var olan mesajları ekranda gösterecektir ve mesaj benden demiş olur!
   sendMessage(message);//socket api içerisinde yazdık ve burada çalıştırıyoruz!
   setMessage('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={message} className={styles.textInput} type='text' onChange={(e)=>setMessage(e.target.value)}></input>
      </form>
    </div>
  )
}

export default ChatForm