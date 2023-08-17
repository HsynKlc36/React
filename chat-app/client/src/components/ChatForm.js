import {useState} from 'react'
import styles from './styles.module.css'
function ChatForm() {
  const [message,setMessage]=useState('')
  const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(message);
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