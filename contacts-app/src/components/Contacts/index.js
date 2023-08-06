import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css'// yazdığımız css dosyasını ekledik

function Contacts() {
    const [contacts,setContacts]=useState([])//kayıtları ekleriz 
    useEffect(()=>{
    console.log(contacts);
    },[contacts])
  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
//not rfce ile hızlıca bir react componenti oluşturabilirsiniz!
// herhangi bir form submit edildiğinde form componentinde addContact props'unu kullanarak  yani setContacts'ı kullanarak bir ekleme yaparız ve böylelikle contacts da bir değişiklik olmuş olur artık set edilmiştir ve buradaki useEffect çalışarak consola bunu yazacaktır.Ayrıca her set işleminde burası bir dizi olduğu için önceki set edileni koruyacak ve üzerine yeni formları da ekleyecektir böylece contacts larımız her başarılı submitte dizi içerisinde peşpeşe eklenecektir!