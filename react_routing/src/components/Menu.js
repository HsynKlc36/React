import React from 'react'
import { Link,useNavigate } from 'react-router-dom'// bunu kullanabilmek için öncelikle 'npm install react-router-dom@6' projeye bunu yüklemelisiniz!bunun ile sayfanın komple yenilenmesini de önlemiş oluyoruz!

function Menu() {
    const navigate=useNavigate();
  return (
    <div>
       <h2>Sayfalar</h2>
       <ul className='menu'>
       <li onClick={()=>navigate(-1)}>
        Geri 1    
        </li>
        <li >
        <a href='#/' onClick={()=>navigate(-1)}>Geri 2 </a>   
        </li>
       <li>
            <a href='/'>Anasayfa(a tagı )</a> 
        </li>
        <li>
            <Link to='/'>Anasayfa</Link> 
        </li>
        <li>
          <Link to='users'>Kullanıcılar</Link>  
        </li>
        <li>
         <Link to='contact'>İletişim</Link>    
        </li>
        <li onClick={()=>navigate('contact')}>
        İletişim(navigate ile)    
        </li>
       </ul>
    </div>
  )
}

export default Menu
// yukarıda link ile değilde a tagı ile yönlendirme yaparsak sayfayı komple render edecektir!
//Link oluşturarak ilgili sayfaya gidebiliriz!
// aynı işlemi dilersek navigate ilede yapabiliriz tek fark bir link gibi görünmemesidir!