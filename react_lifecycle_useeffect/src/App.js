import Counter from "./components/Counter";
import { useState } from "react";
function App() {
 const [isVisible,setIsVisible]=useState(true)
  return (
    <div className="App">
  {isVisible && <Counter/>}
  <br/>
  <button onClick={()=>setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
//yukarıda bir componentin yaşamaya başlaması ele alınmıştır ve belli koşula göre componentin yaşam döngüsü sonlandığındaki durumu yani unmount olma durumu da ele alınmış olup counter companentinde return ifadesi ile sonlandırılması sağlanmıştır!

//Bir React componentinin hayat döngüsü, componentin oluşturulduğu an ve güncellendiği an itibariyle yaşadığı aşamalardır. Her bir hayat döngüsü aşaması, componentin verilerinin güncellenmesi veya yeniden render edilmesi gibi belirli işlemleri içerebilir.

// Her component de bizler gibi doğar, yaşar, büyür ve ölür.

// useEffect
// Yaşam döngümüzdeki eventleri useEffect kullanarak yakalayabiliriz.

// Hooklar herhangi bir if bloğu içerisinde olmamalı, componentin tepesinde bulunmalıdır.
