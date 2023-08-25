import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merhaba Deploy İşlemi!!
        </a>
      </header>
    </div>
  );
}

export default App;
//----------------------------(surge ile)Deploy işlemi aşamaları-----------------------
//bir react projesini deploy edebilmek için öncelikle projeyi surge klasörü altında açıyoruz!ardından npm run build'i çalıştırıp build klasörünün oluşmasını sağlarız sonrasında ise build klasörü altında deploy islemi için npx surge yapmamız yeterli olacaktır fakat biz bunları ayrı ayrı komutlar olarak yazmak yerine gelip package.json içerisine script olarak deploy adında bir komut yazdık("deploy": "npm run build && npx surge"). Önce build işleminin yapılacağı dizini seçmeliyiz(C:\Users\kılıç\OneDrive\Masaüstü\React\react_deploying\surge) yani react projesinin olduğu surge dizinini, ardından npm run deploy diyerek yukarıdaki komutu çalıştırırız.Böylece surge altında build yaparak build klasörü açılacak ardından deploy içerisindeki 2.komut çalışacak ve surge işleminin yapılacağı yani deploy edilecek klasörü seçmeliyiz, bu da surge altındaki build klasörüdür(C:\Users\kılıç\OneDrive\Masaüstü\React\react_deploying\surge\build) ardından enter diyerek deploy işlemini tamamlamış oluruz.yaptığımız değişiklikleri verilen domain ile görüntüleyebiliriz!