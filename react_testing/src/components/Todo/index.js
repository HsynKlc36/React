import {useEffect, useState} from 'react'
const defaultItems=[
    {
        name:'item A'
    },
    {
        name:'ITEM B'
    },
    {
        name:'iTem C'
    }
]
function Todo() {
    const [text,setText]=useState('');
    const [items,setItems]=useState(defaultItems);

    useEffect(()=>{
     setText('');
     console.log(items)
    },[items])
  return (
    <div>
        <label>
            Text
            <input value={text} type='text' name='textInput' onChange={(e)=>{setText(e.target.value)}}></input>
        </label>
        <br/>
        <br/>
        <button onClick={()=>{setItems((prev)=>[...prev,{name:text}])}}>Click</button>
        <br/>
        <br/>
        {items.map((item,index)=>{
          return <div key={index}>{item.name}</div>
        })}

       
    </div>
  )
}

export default Todo