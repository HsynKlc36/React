import {useState, useEffect} from 'react'
import axios from 'axios';

function Users() {
const [users,setUsers]=useState([]);
const [isLoading,setIsLoading]=useState(true);

//     useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/users')
//  .then(resp=>resp.json())
//  .then(resp=>setUsers(resp))
//     .catch((e)=>console.log(e))
//     .finally(()=>setIsLoading(false))   
//     },[])

useEffect(()=>{
axios('https://jsonplaceholder.typicode.com/users')
.then(resp=>setUsers(resp.data))//burada çevirmeyi doğrudan kendisi yapar fakat datasını almak gerekir.
.catch((e)=>console.log(e))
.finally(()=>setIsLoading(false))  
},[])

  return (
    <div>
        <h1>Users</h1>
        {isLoading && <div>Loading...</div>}

        {users.map((user,i)=>{
          return  <div key={i}>{user.name}</div>
        })}
    </div>
  )
}

export default Users