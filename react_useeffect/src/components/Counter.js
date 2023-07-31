import {useState,useEffect} from 'react';

//useEffect(()=>{},[]) bu genel kullanımı temsil eder.Bir componentin yaşamaya başlaması ve bitmesi(doğması ve ölmesi) bu anlardaki belli başlı kontroller yapılabilir ya da [] buranın içerisi doldurularak state'lerdeki değişikliklerin olması anında yine kontroller sağlanabilir!
function Counter(){
    const [number,setNumber]=useState(0);
    // const [name,setName]=useState('hsyn');
  
  useEffect(()=>{
    console.log('Component mount edildi');//componentin doğma anıdır mount edilmesi!

   const interval= setInterval(()=>{
        setNumber((n)=>n+1);
    },1000)
    return ()=>clearInterval(interval);//bunun sayesinde unmount işlemini yaparız yani return  ile yapmak istediğiniz işlemi belirterek componenti sonlandırabiliriz!
  },[])
  
  useEffect(()=>{
    console.log('number state güncellendi');
  },[number])
  
//   useEffect(()=>{
//     console.log('name state güncellendi');
//   },[name])

  // useEffect(()=>{
  //   console.log('number veya name state güncellendi');
  // },[name,number])
  
    return (
      <div className="App">
       <h1>{number}</h1>
  <button onClick={()=>setNumber(number+1)}>Click</button>
  <hr/>  
  {/* <h1>{name}</h1>  
  <button onClick={()=>setName('hüseyin')}>Click</button>     */}
      </div>
    );
}
export default Counter; //app.js de bu componenti yakaladık!