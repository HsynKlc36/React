import {createContext,useContext,useState} from 'react';

const UserContext=createContext();//context'imizi oluşturduk!

const UserProvider=({children})=>{
    const [user,setUser]=useState(null);
    const values={
        user,
        setUser,
    }
     return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}//burası ise oluşturulan context'in data sağlayıcısıdır!
const useUser=()=>useContext(UserContext);
export {UserProvider,useUser};

//buradaki children bu companent içerisindeki diğer tüm componentlerdir ve bu componentleri sarar ve o children componentleriyle data'larını paylaşır.

//sonucç olarak context'ler özünde global state yönetimi için kullanılan react araçlarından sadece biridir!