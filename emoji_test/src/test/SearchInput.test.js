/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import {fireEvent, render,screen} from '@testing-library/react';
import EmojiResults from '../EmojiResults.js';
import App from '../App.js'



describe('Emoji Filter',()=>{
    let searchInput
     beforeEach(async()=>{
        //   render(<EmojiResults/>);
        render(<App/>)
         searchInput=await screen.getByLabelText(/inputTest/i)//böyle bir text içeren label içeriğine bakar ve içerisinde text ile beraber bir input varsa onu alır yoksa doğrudan text'in bulundğu label'ı alır!.Ayrıca içerisinde label geçiyorsa sadece form elemanlarını alacaktır.Yani label'ın işaret ettiği input gibi form elemanlarını
         console.log(searchInput)
   
     });
 test('emoji filter işlemi test ediliyor', () => { 
    const emoji='Joy'
    fireEvent.change(searchInput, { target: { value: emoji } });
    console.log(screen.getByText(emoji))
    expect(screen.getByText(emoji)).toBeInTheDocument();// burada var olan real dom üzerindeki değerlere(text) lere göre elementi yakalar.Örneğin inputta da 'Joy' yazmıştım neden onu almadı çünkü dinamik değişen değerleri değilde real dom üzerindeki değerleri yakalar!
 })
 });