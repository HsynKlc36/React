import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
    const {theme,setTheme}=useContext(ThemeContext);
  return (
    <div>
        <h3>Active theme :{theme}</h3>
        <button onClick={()=>setTheme(theme==='light'? 'dark':'light')}>Change Theme</button>
    </div>
  )
}

export default Header
//button da değişiklik olduğunda yani theme değiştiğinde bakalım App.js de onunla aynı hiyerarşideki {children } componenti olan Header daki theme da değişecek mi bunu gözlemlemek için bu componenti yazdık ve App.js içerisine import ettik.Bu değeri kullanan tüm componentlerde bu değişim gözlemlenecektir. Yani button da click2lenince theme değişince tüm bu theme context'ini kullanan componentlerde de değişmiş olacaktır!

//ayrıca buraya da buton ekleyip değişiklik yaptığımız zaman aynı değişiklikten button componenti de etkilecektir cünkü aynı context'i orası da kullanır.Böylelikle aynı value'ları kullanırlar!birisinde olan değişiklik tüm bu context'i kullanan componentleri etkilecektir!