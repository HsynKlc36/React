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
           <Link to={`${user.id}`} state={{user}}>{user.name}</Link> 
        </li>))
       }
       </ul>
     </div>
  )
}

export default Users
//yukarıdaki link içerisinde bulunan route elemanı olan state içerisinde verdiğimiz değeri yakalamak istediğimiz  yerde location ile yakalayabiliriz!fakat yakalamak istediğimiz yer tam olarak yönlendirdiğimiz route olacaktır!

//ayrıca yukarıda use effect ile yaptığımız kontrol de state linke tıklanınca doldurulur fakat o url'e users'lardaki linke tıklayarak değilde doğrudan url den gitmeye çalışsak yani localhost:3000/users/1 gibi url e yazarsak bu durumda location içerisinde o state değerine ulaşamayız buna istinaden yapılmış bir kontroldür!