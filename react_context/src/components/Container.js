
import {useTheme} from '../context/ThemeContext'
import {useUser} from '../context/UserContext'
import Header from './Header'
import Button from './Button'
import Profile from './Profile';

function Container() {
  //const data=useContext(UserContext);//App.js de multi context yapısından dolayı container tüm sağlayıcıların verilerine ulaşmış oldu! ayrıca doğrudan data alırsak gönderilen datayı komple alır fakat içerisindeki bir elemana ulaşmak istersek {user} gibi belirtabiliriz.fakat dikkat edilmesi gereken nokta data içerisindeki key ile burada karşıladığımız key aynı olmalıdır!
  const {user}=useUser();
  const {theme}=useTheme();
  return (
    <div className={`App ${theme==='dark'?'dark':'light'}`}>
      <Header/>
      <hr/>
      <Button/>
      <hr/>
      <Profile/>
      <hr/>
      <code>doğrudan UserProvider dan ulaşılan user: {JSON.stringify(user)}</code>
    </div>
  )
}

export default Container;
//buradaki amaç bir Container oluşturmak ve bunu provider içerisinde App.js de kullanmak.Ve context içerisinde olacak olan state değişikliklerine göre bu container'e verdiğimiz style' lardaki değişiklikleri de gözlemlemek.bununla alakalı style'ları app.css içerisinde düzenledik fakat buraya import etmedik, bunları App componentinde çağırdığımız için orada App.css'i import etmemiz yeterlidir! 