import React from 'react'
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem';
import ScrollableFeed from 'react-scrollable-feed'// npm add react-scrollable-feed ile paketi yükledik sonra import ettik .Otomotik olarak scroll bar ile sarmalar var her mesajda otomatik olarak en aşağıya iner!
function ChatList() {
  const {messages}=useChat();
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item,key)=>{
          return <ChatItem key={key} item={item}/>
        })}
      </ScrollableFeed>
    </div>
  )
}

export default ChatList