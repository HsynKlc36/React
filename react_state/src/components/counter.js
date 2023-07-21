import {useState} from "react";  
const Counter=()=>{
    const [count,setCount]=useState(0)
    const increase=()=>{
        setCount(count+1);
    };

return( <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
    <button onClick={increase}>Increase</button>
    </div>
)}
export default Counter;
//react state'lerde değişiklik olmadığı taktirde buradaki func da gerekli yerler render edilmez ve böylelikle daha performanslı çalışır!