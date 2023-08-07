import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'// bunun ile ilgili sayfada route'den yakaladığım kullanıcın id sine ulaşmak için kullandık!

function UserDetail() {
    // const params=useParams();
    // console.log(params.id);
    const [userDetail,setUserDetail]=useState(null);
    const {id}=useParams();//string olarak gelir.Bu sayede ilgili route üzerindeki ilgili değeri yakalayabiliriz!
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(res=>res.json())
       .then(data=>setUserDetail(data))
    },[id])
  return (
    <div>
        <h2>Kullanıcı Detayı</h2>
        {userDetail && <pre>{JSON.stringify(userDetail,null,2)}</pre>}
        <Link to={`/users/${Number(id)+1}`}></Link>
        </div>

  )
}
//yukarıda linke tıklandığında tekrardan bu sayfaya farklı id ile yönlendirme olacaktır ve buranın tekrardan çalışıp yeni gelen id'ye göre useeffect'in çalışabilmesi için [id] bağımlılığını verdik böylece component sadece ilk yüklendiğinde değil id de değiştiğinde useEffect tekrardan çalışacak ve ilgili user'ı getirecektir!
export default UserDetail