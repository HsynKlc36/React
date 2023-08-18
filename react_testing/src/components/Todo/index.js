import {useState} from 'react'
const defaultItems=[
    {
        name:'item A'
    },
    {
        name:'item B'
    },
    {
        name:'item C'
    }
]
function Todo() {
    const [text,setText]=useState('');
    const [items,setItems]=useState(defaultItems);
  return (
    <div>
        <input value={text} type='text' name='textInput' onChange={(e)=>{setText(e.target.value)}}></input>
        <button onClick={()=>{setItems((prev)=>[...prev,text])}}></button>
        <br/>
        <br/>
        <h2>Items</h2>
        {items.map((item,index)=>{
          return <span key={index}>{item.name}</span>
        })}
    </div>
  )
}

export default Todo