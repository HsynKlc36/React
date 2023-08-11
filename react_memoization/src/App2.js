import './App.css';
import {useState,useMemo, useCallback} from 'react'
import Header2 from './components/Header2'


function App2() {
  const [number,setNumber]=useState(0);
  const [text,setText]=useState('');

  const increment =useCallback(()=>{
      setNumber((prevState)=>prevState+1)
  },[])//burada prevState state'in önceki halini alır yani burada 0'ı alır. bunu yapmamızdaki amaç burada doğrudan number'ı kullansaydık [] içerisinde bağımlılık olarak bu number'ı isteyecekti ve her number değiştiğinde bu function çalışacaktı! dolayısıyla her çalıştığında ise increment prop'u değişeceği için Header2 sürekli render edilecektir!.Kısacası bir fonksiyonum varsa ve bu fonksiyonu herhangi bir alt componente geçiyorsam, o alt componentte tekrar tekrar render edilmesini önlemek istiyorsam useCallback() i kullanabilirim! Aşağıdaki <Header2 increment={()=> setNumber(number+1)}/> örneğinde görüldüğü üzere üst componentten alt componente gönderilen prop eğerki bir function içeriyorsa bunu useCallback ile göndermek daha sağlıklı olacaktır.Çünkü header2 de react.memo kullansakta burada her render edildiğinde number state'i değişeceği için header2 içerisindeki prop'ta(prop function içerir ve number değişkeni vardır) değişeceğinden header2 tekrardan render edilecektir! Yani sonuç olarak App2 render edildiğinde böylelikle header2 render edilmeyecek geri kalan kısımda değişiklik olduğu taktirde örneğin number state'i değişeceği için geri kalan kısım render edilmiş olacaktır!
  return (
    <div className="App">
      <Header2 increment={increment} />
      {/* <Header2 increment={()=> setNumber(number+1)}  */}  
      <hr/>
      <h1>{number}</h1>
     
      <br/>
      <input value={text} onChange={({target})=>setText(target.value)}></input>
    </div>
  );
}

// sonradan yazdığımız function sadece number değiştiğinde dışarıdaki bir function'ı çalıştıracak ve data2 değeri değişecektir bu durumda da yine propta değişeceği için Header render edilecektir!
export default App2;