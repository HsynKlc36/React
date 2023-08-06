
import './App.css';
import A from './components/A'
import B from './components/B'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <A/>
        <B/>
        <div style={{color:'red', backgroundColor:'blue'}}>
          burada stil değişiklikleri yapacağız!
        </div>
        <div class="alert alert-primary" role="alert">
         A simple primary alert—check it out!
        </div>
      
      </header>
    </div>
  );
}

export default App;
// inline olarak style verirken yani içeride doğrudan css kodlarını yazarken object oluşturur gibi; style={{}}  içerisinde vermeliyiz 2.süslülerin içerisinde! ayrıca normal css dosyasında tanımlandığı gibi tanımlanamaz yani background-color yazılmaz js bunu kabul etmez camelcase kuralına göre yazılmalıdır(backgroundColor)!

//ayrıca bir cdn eklemek için örneğin burada bir alert divi ekledik bootstrapten 15.satırda ve  bu bootstrapt'e uygun cdn'i doğrudan public içerisindeki index.html içerisine cdn'i ekledik ve böylece alert çalışmış oldu!