/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import {fireEvent, render,screen} from '@testing-library/react';
import App from '../App.js'



describe('Emoji Filter',()=>{
    let searchInput
     beforeEach(async()=>{
        //   render(<EmojiResults/>);//doğrudan bunu render edersek app içerisindeki bu componente ait bir prop ve onun değerini yakalamayaz ve test hata verir bu yuzden doğrudan propların tanımlandığı yani app componentini render ettik!
        render(<App/>)
         searchInput=await screen.getByLabelText(/inputTest/i)//böyle bir text içeren label içeriğine bakar ve içerisinde text ile beraber bir input varsa onu alır yani form elemanını alır!.Ayrıca içerisinde label(getByLabelText) gibi geçiyorsa sadece form elemanlarını alacaktır.Yani label'ın işaret ettiği input gibi form elemanlarını(child ları olabileceği gibi html for attribute'ü ile de işaretlenmiş form elemanları varsa yakalayacak ve alacaktır!).text in yazılı olduğu label da text dışında herhangi bir form elemanı yoksa hata verecektir yani label tagının kendisini almayacaktır!
         console.log(searchInput)
         const divElement=screen.getByText(/kamil/i);//div içerisinde hangi child olursa olsun text'i dive vermiştim ve sadece div elementinin kendisini getirdi!
         console.log(divElement)
        
   
     });
 test('emoji filter işlemi test ediliyor', () => { 
    const emoji='Joy'
    fireEvent.change(searchInput, { target: { value: emoji } });
    console.log(screen.getByText(emoji))
    expect(screen.getByText(emoji)).toBeInTheDocument();// burada var olan real dom üzerindeki değerlere(text) lere göre elementi yakalar.Örneğin inputta da 'Joy' yazmıştım neden onu almadı çünkü dinamik değişen değerleri değilde real dom üzerindeki değerleri yakalar!
 })
 });