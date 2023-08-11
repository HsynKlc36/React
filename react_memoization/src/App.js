
import './App.css';
import {useState,useMemo} from 'react'
import Header from './components/Header'

//const data={name:'huseyin'};// eğerki data dışarıda tanımlanırsa her render edildiğinde referansı değişmeyecektir ve aynı nesne isaretlenecektir.{}==={} js de bu iki nesne birbirine denk değildir ya da []===[]. referans türlü verilerde böyledir.Yani render edildiği taktirde nesnenin kendisi aynı olsa bile referans ile işaretlediği nesne değişmiş olur yani aslında nesne tam olarak aynıdır fakat referansı değişeceği için aynı nesneyi yeniden oluşturup yeni bir referansla refere eder ve referansı değişmiş olur bir öncekiyle aynı referansa sahip olmaz .Örneğin ilkinde aynı nesneyi 1.1.2 ile refere ettiyse tekrar render edildiğinde 1.1.3 ile refere edebilir.Durum böyle olunca button clicklendiğinde app() componenti tekrardan render edileceğinden data nesnesinin de referansı değişiyor ve propları karşılaştırdığında false olduğunu görünce bunlar aynı data değil diyerek Header'ı tekrardan render edecektir!bu gibi durumların önüne geçebilmek içinse useMemo hook'u kullanılır.Fakat component dışında tanımlayabilseydik useMemo'yu da kullanmaya gerek kalmazdı ama bazı durumlarda component içerisinde kullanmak zorunda kalırız ve böyle bir durumda da useMemo devreye girer!
function App() {
  const [number,setNumber]=useState(0);
  const [text,setText]=useState('');

  // const data ={name:'huseyin'};referansı değişeceği için useMemo ile aşağıdaki gibi kullandık!
  // const data= useMemo(()=>{
  //   return {name:'huseyin'}; 
  // },[]) => bu şekilde yaptığımız taktirde sadece data değiştiğinde gönderilen propta değişmiş olacak ve o zaman render edilecek fakat aşağıdaki durumda her number değiştiğinde return edilen data da değişecek ve böylelikle propta değişeceği için Header componenti render edilecektir!sadece nesne değil array içinde kullanabiliriz!
  const data= useMemo(()=>{
    return [{name:'huseyin',number:number}]; 
  },[number])

  //const data2=calculateObject(); bu şekilde yapsaydık aşağıdaki inputa her  değer girildiğinde text state'i değişeceği için sürekli bu sayfa render edilecekti dolayısıyla data2 nin de referansı değişeceğinden Header içerisindeki data2 propu değişecek dolayısıyla da Header componenti de render edilecekti!o yüzden yine aşağıdaki gibi useMemo hook'unu kullandık!
  const data2= useMemo(()=>{
    return calculateObject(number); 
  },[number])
  return (
    <div className="App">
      <Header number={number < 5 ? 0:number} data={data} data2={data2}/>
      <hr/>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>
      <br/>
      <input value={text} onChange={({target})=>setText(target.value)}></input>
    </div>
  );
}
function calculateObject(number){
  console.log('calculating...')
  for(let i=0; i<100000000; i++){}
  console.log('calculating completed!');
  return {age:26,number:number};
}
// sonradan yazdığımız function sadece number değiştiğinde dışarıdaki bir function'ı çalıştıracak ve data2 değeri değişecektir bu durumda da yine propta değişeceği için Header render edilecektir!
export default App;
//burada click'lendiğinde state değişeceği için tekrardan tümünü render edecektir.Fakat header'ın sadece ilk anda sayfa yüklenirken render edilmesini istiyorum.Yani ben her Clicklediğimde <Header/> değişmeyeceği için render edilmesine gerek yoktur!
//peki ne zaman bir daha render edilir(Header)=> burada prop'lar tanımlarsak ve proplar değiştiği takdirde o zaman header tekrardan render edilir veyahut sayfayı komple render ederseniz de tekrardan render edilmiş olur.yukarıdaki durumda number 5 olana kadar header'a giden number değeri hep 0 olacaktır bu yüzden yine sadece sayfa render edilirse render edilecektir.fakat sayı 5 e gelince artık değişen bir değer prop olarak gönderileceği için header da sürekli number değeri değişeceğinden app.js render edilirken içerisindeki header componenti de render edilecektir çünkü prop'u artık değişkenlik gösteriyodur!