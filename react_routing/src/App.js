
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'// bunu kullanabilmek için öncelikle 'npm install react-router-dom@6' projeye bunu yüklemelisiniz!

import Login from './pages/Auth/Login';
import UserDetail from './pages/Dashboard/UserDetail';
import Home from './pages/Dashboard/Home';
import Users from './pages/Dashboard/Users';
import Contact from './pages/Dashboard/Contact';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='auth' element={<AuthLayout/>}>
      {/* <Route path='login' element={<Login/>}/> */}
      <Route index element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
    </Route>
      <Route path='/' element={<DashboardLayout/>}>
       <Route index element={<Home/>}/>
       <Route path='users' element={<Users/>}/>
       <Route path='users/:id' element={<UserDetail/>}/>
       <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='*' element={<Error404/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

//buradaki her bir route elemanı aslında göstermek istediğimiz sayfaları barındıracaktır!
//yukarıdaki index => path='/' ifadesiyle aynı anlama gelmektedir! yani default olarak açılacak sayfa!
// <Route path='users' element={<Users/>}/> bu şekilde /users yazarak ulaşabiliriz ve burada Users componenti ile karşılaşırız! 

// ayrıca react-router-dom ile sayfanın komple yenilenmesininde önüne geçmiş oluyoruz!

//auth layout açıldığında yani localhost:3000/auth açıldığında doğrudan login componenti de içerisinde açılsın istiyorsan login'in path'ine  doğrudan index de yazabilirsin!

//özet olarak route ile layout oluşturup içerisinde hangi route'ların olacağını ve o route'lara gidince hangi componentlerin çağrılacağını ve çağırılan componentin içeriğini de göstermek için outlet hook'unun kullanılması gerektiğini öğrendik.route' larda element olarak belirlediğimiz componentler o route gidince gösterilecek olan componenti belirtir!