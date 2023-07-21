import {useState} from 'react';
import InputExample from './components/input_example';
import './App.css';

function App() {
  const [name,setName]=useState('hsyn');
  const [age,setAge]=useState(26);
  const [friends,setFriends]=useState(['ahmet','mehmet']);
  const [address,setAddress]=useState({title:'ev',zip:34000})
  console.log(friends)
  return (
    <div className="App">
      <h1>merhabalar ben bu yerlerden biriyim.Uzun zamandır bizim haneden firariyim yazan:{name}!</h1>
      <button onClick={()=>setName('huseyin')}>name click</button>
      <h2>{age} yaşım var!</h2>
      <button onClick={()=>setAge(27)}>Age click</button>
      <hr/>
      <hr/>
      <h2>friends</h2>
      {
        friends.map((friend,index)=>(
            <div key={index}>
               {friend}
            </div>  
        )
      )}
      <button onClick={()=>setFriends([...friends,'ayşe'])}>add new friend</button>
      
      <h2>address</h2>
      <p>{address.title} / {address.zip}/{address.country}</p>
      <button onClick={()=>setAddress({...address,title:'iş',zip:44000,country:'Turkey'})}>change the address</button>
      <br/>
      <br/>
      <br/>
      <h1>Input state</h1>
      <InputExample/>
    </div>
  );
}

export default App;
//state değişme potansiyeli olan değişkenler için kullanılır(yani dinamik değişkenler için kullanılır!).useState() içerisinde ilk default değerini atayabilirsiniz!