import {createContext, useState,useContext} from 'react'

const ChatContext=createContext();

function ChatProvider({children}) {
    const [messages,setMessages]=useState([{message:'merhaba'},{message:'merhabana merhaba özgür kardeşşş'}]);
const values={
messages,
setMessages,
};
  return (
    <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
  )
}
const useChat=()=>useContext(ChatContext);
export {useChat,ChatProvider}