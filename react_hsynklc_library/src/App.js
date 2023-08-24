import logo from './logo.svg';
import './App.css';
import {Paragraph,Button} from 'hsynklc' //kendi yazdığımız kütüphaneyi indirdik . npm install hsynklc --force ile!
import 'hsynklc/dist/index.css' // library' nin css lerini kullanabilmek için!
function App() {
  return (
    <div className="App">
      <Paragraph text='bu paragraph componentinin textidir! ve bunu hsynklc library sini yükleyerek kullanıyorum!'/>
      <Button text='click' onClick={()=>alert('hsynklc kütüphanesinden gelen alertim!')}/>
    </div>
  );
}

export default App;

//oluşturduğumuz hsynklc kütüphanesini bu projede npm i hsynklc --force diyerek kullandık --force dememizin sebebi versiyon farklılığı oldu!!