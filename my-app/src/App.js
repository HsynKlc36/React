import logo from './logo.svg';
import './App.css';
import Header,{surname}  from './components/Header'; 
import Body  from './components/body'; 
import { Klc as MyKlc } from './components/bodysection';//burada Klc değişkenleri çakışmaktadır.Yani Body içerisine import ettiğimiz Klc değişkeni body'i buraya import ettiğimiz için dolaylı yoldan buraya gelmektedir ve direkt olarakta Klc'yi import ettiğimiz için bu iki Klc iki tane aynı isimde farklı import gibi algılanır ve çakışır! bu yüzden isimleri birbirinden farklı olmalıdır! bunun için as keyword'ünü kullanabilirsiniz!
import User from './components/user'

const name='huseyin';//bu şekilde companentlerde değişkenler tanımlarız ve jsx de bunları render edebiliriz!

const isLoggedIn=true;

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <h1>{name}</h1>
//       <h1>`benim adım ${name}`</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const friends=[
{
  id:1,
  name:'hsyn'
},
{
  id:2,
  name:'klc'
},
{
  id:3,
  name:'huso'
}
]



function App() {
  return (
    <>
     <img src={logo} className="App-logo" alt="logo" />
     <Header/>
     <div><Body/></div>
      <h1>{MyKlc}</h1> {/*burada değişken aldığımız için {} içerisinde bildirmeliyiz fakat function olsaydı </> içerisinde bildirirdik!Buna dikkat edilmesi gerekir! */}
      <User name='hsyn' surname='klc' isLogIn={true} number1={2} friends={friends} 
      address={{title:'ev', town:'esenyurt',city:'istanbul',zip:34000}}/>
      <h1>{name}</h1>
      <h1>{`${name} ve ${surname}`}</h1>
      <h1>{`benim adım ${name}`}</h1>
      <h1> {isLoggedIn && `benim koşullu adım ${name}`}</h1>
       {!isLoggedIn && `giriş yapmadınız`}

       <h2>{isLoggedIn? `merhaba ${name}! giriş yapıldı`:'giriş yapılmadı'}</h2>
    </>

  );
}

// function App(){
//   return(
//     <div>merhabalar ben bir div'im!</div>
//   )
// }

export default App;
//index te kullanmak üzere export ederiz!

//not:yazdıklarımız aslında bir html değil jsx dir!yani nasıl oluyorda js içine html yazabiliyoruz demeyin.Aslında jsx yazıyoruz.bunu react'ın kendi kodlarıylada yapabilirsiniz fakat işleri karmaşık hale getirebilir!

//not1:Aldığımız companentleri Header mesela büyük harfle oluşturmaya dikkat ediniz aksi taktirde bunu jsx deki hmtl taglarıyla karıştıracaktır

//not2:kapsayıcı bir tagın içerisinde kullanmalısınız companentinizi yoksa hata alacaksınızdır!bunlar illa ki div,p gibi taglar olmak zorunda değildir.<></>böyle de yapabilirsiniz. ya da React'ı import edip <React.Fragment></React.Fragment> i kullanabilirsiniz!

//not3:dikkat etmeniz gereken bir diğer konu ise jsx de html ile ilgili vermek istediğimiz for ,class gibi isimler doğprudan html deki gibi kullanılmaz!cünkü js de de bu keywordlar vardır ve karışıklığa sebep olmamak için <label className="xyz"></label> ya da <p htmlFor="myp"></p> burada görüldüğü üzere doğrudan html de olduğu gibi oradaki attribute'ler kullanılmaz bunların js deki karşılığı kullanılır.Çünkü jsx yazıyoruz yani js ile bunu yazıyoruz ve bunların js'nin kendi for ve class gibi keyword'leri ile karışmaması için bunlara dikkat etmeliyiz!