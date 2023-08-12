import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    // const data=useContext(ThemeContext);
    //console.log(data);
    //console.log(data.theme);
     const {theme,setTheme}=useContext(ThemeContext);
    console.log(theme);
  return (
    <div>
        <h2>Button(Active Theme: {theme})</h2>
        <br/>
        <br/>
        <button onClick={()=>setTheme(theme==='light'? 'dark':'light')}>Change Theme</button>
    </div>
  )
}

export default Button
//App.js altında ThemeContext.Provider altında button'u kullandık ve orada verdiğimiz value değerine ulaşmak istiyoruz.Button  componentine gelip useContext ile o dataya ulaşabiliriz!ayrıca burada ThemeContext olarak oluşturduğumuz context'i de useContext içerisine parametre olarak veririz.Buradaki useContext data'ya ulaşmamızı sağlar!