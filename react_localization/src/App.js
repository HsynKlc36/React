import {useState,useEffect} from 'react';
import './App.css';
import {IntlProvider,FormattedMessage,FormattedNumber} from 'react-intl';// npm add react-intl diyerek önce paketi kurduk!

const messages={
  'tr-TR':{
    title:'Merhaba React severler!',
    description:'{count} yeni mesajınız var'
  },
  'en-US':{
    title:'Hello, They love React!',
    description:' you have {count} new messages'
  }
}

function App() {
  const defaultLocale=navigator.language // tarayıcının default dilini verir
  console.log(defaultLocale);//tr-TR veya en-US olabilir!
 const  [locale,setLocale]=useState(localStorage.getItem('locale')||defaultLocale)//local storage varsa oradaki değeri getirir yoksa defaultLocale'i getirecektir!

 useEffect(()=>{
  localStorage.setItem('locale',locale)
 },[locale])
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}> 
        <FormattedMessage id='title' />
        <br/>
        <br/>
        <p>
        <FormattedMessage id='description' values={{count:10}}/>
        </p>
        <button onClick={()=>setLocale('tr-TR')}>TR</button>
        <button onClick={()=>setLocale('en-US')}>EN</button>
        <br/>
        <br/>

      </IntlProvider>
    
    </div>
  );
}

export default App;
//Not: locale ve messages IntlProvider'ın props'larıdır!
//messages =>  nesne olmalıdır!