import {createContext,useState} from 'react';

const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('dark');

    const values={
        theme,
        setTheme
    };
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
export default ThemeContext;
//burada bir context oluşturmuş olduk! ve value ile datayı gönderdik burada gönderdiğimiz data state elemanlarıdır.Buradaki amaç buna erişip state' de değişiklik yapmak ve bu değişiklikler ana componentte de görünüyor mu bunu incelemek

//context sayesinde oluşturduğumuz state'leri data'ları bütün children'lere rahatlıkla taşıyabiliyoruz!

// context kullanmasaydık button ve header'a göndermek istediğimiz state'leri bunları kapsayan App.js de tanımlamak zorunda kalacaktık ve bunları o componentlere propslar yardımıyla taşıyacaktık.İşlemleri daha yalın ve basite indirgememizi sağlar context yapısı!