import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Users() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(users=>users.json())
    .then(users=>setUsers(users))
    },[])
  return (
    <div>
       <h2>Kullanıcılar</h2> 
       <ul>
       {
        users.map((user,i)=>
        (<li key={i}>
           <Link to={`${user.id}`}>{user.name}</Link> 
        </li>))
       }
       </ul>
     </div>
  )
}

export default Users