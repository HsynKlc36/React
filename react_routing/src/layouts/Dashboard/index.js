import React from 'react'
import Menu from '../../components/Menu'
import { Outlet } from 'react-router-dom'



function DashboardLayout() {
  return (
    <div>
      <Menu/>    
      <div id='Content'>
        <Outlet/>
        </div>     
    </div>
  )
}

export default DashboardLayout
//içerik alanını göstermek için outlet kullanılır.Yani içeriği nerede göstermek isterseniz orada  kullanabilirsiniz.Örneğin burada dashbord içerisinde menuyu kullandık fakat menu den linkler geldiği halde linklere tıklanınca url olarak doğru url e gitse bile içeriği getirmiyordu.Bu gibi durumlarda outlet'i kullanarak içeriğe de ulaşabilirsiniz.