
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'// bunu kullanabilmek için öncelikle 'npm install react-router-dom@6' projeye bunu yüklemelisiniz!
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import UserDetail from './pages/UserDetail';

function App() {
  return (
   <BrowserRouter>
   <Menu/>
   <Routes>
      <Route index element={<Home/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='users/:id' element={<UserDetail/>}/>
      <Route path='contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

//buradaki her bir route elemanı aslında göstermek istediğimiz sayfaları barındıracaktır!
//yukarıdaki index => path='/' ifadesiyle aynı anlama gelmektedir! yani default olarak açılacak sayfa!
// <Route path='users' element={<Users/>}/> bu şekilde /users yazarak ulaşabiliriz ve burada Users componenti ile karşılaşırız! 

// ayrıca react-router-dom ile sayfanın komple yenilenmesininde önüne geçmiş oluyoruz!