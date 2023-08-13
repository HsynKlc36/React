import {createContext,useContext,useEffect,useState} from 'react';

const ThemeContext=createContext();

 const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState(localStorage.getItem('theme')|| 'light');// burada localStorage silinirse null geleceği için yukarıdaki gibi yazabiliriz.

    useEffect(()=>{
   localStorage.setItem('theme',theme);//theme her değiştiğinde çalışacak son değeri local Storage'e atacaktır! ve useState ilede bu değeri tutacağım için sayfayı her render ettiğimde local storage' de ki değer görünecektir!aksi halde her yenileme de useState deki default değeri alacaktır!Buda provider'e side effect yaratır,bu istenmeyen durum olabilir.Yani ben Buradaki side effect'lerden context'i kurtarmak için bu provider da da düzenlemeler yapabiliriz useEffect gibi.Sonuç olarak burada ki context yapısı da bir react componentidir ve burada düzenlemeler yapıp bazı etkilerin önüne geçebiliriz!
    },[theme])

    const values={
        theme,
        setTheme
    };
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
const useTheme =()=>useContext(ThemeContext);//bunu context içerisinde yazarsak bu context'i kullanacakğımız componentlerde sürekli olarak hem bu context'i hemde useContext hook'unu import etmemize gerek kalmayacak custom hook yazarız!

export {useTheme,ThemeProvider};
//burada bir context oluşturmuş olduk! ve value ile datayı gönderdik burada gönderdiğimiz data state elemanlarıdır.Buradaki amaç buna erişip state' de değişiklik yapmak ve bu değişiklikler ana componentte de görünüyor mu bunu incelemek

//context sayesinde oluşturduğumuz state'leri data'ları bütün children'lere rahatlıkla taşıyabiliyoruz!

// context kullanmasaydık button ve header'a göndermek istediğimiz state'leri bunları kapsayan App.js de tanımlamak zorunda kalacaktık ve bunları o componentlere propslar yardımıyla taşıyacaktık.İşlemleri daha yalın ve basite indirgememizi sağlar context yapısı!