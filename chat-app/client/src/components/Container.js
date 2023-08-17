import  { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import '../App.css'
import { init } from '../sockedApi'
function Container() {
  useEffect(()=>{
  init();//backend ile bağlantı kurar!
  },[])
  return (
    <div className='App'>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container