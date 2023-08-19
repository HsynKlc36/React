/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import {render,screen} from '@testing-library/react';
import EmojiResults from '../EmojiResults.js';
import App from '../App.js'



describe('EmojiResult Test',()=>{
    let list
     beforeEach(()=>{
        //   render(<EmojiResults/>);
        render(<App/>)
         list=[...document.querySelectorAll('.emoji-item')].slice(0,10)


     });
 test('Uygulama ilk acıldığında emoji listesinin başarılı bir şekilde render edildiğini test et!', () => { 
    
    list.map(item => {
     expect(screen.getByText(item.title)).toBeInTheDocument();
    })
 })
 });