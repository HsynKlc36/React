/* eslint-disable testing-library/no-render-in-setup */
import {render,screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';//burası hata aldığı için user event yerine fireEvent kullandım!
import Todo from './Index';

describe('Todo Test',()=>{
    let input,todoBtn
     beforeEach(()=>{
         render(<Todo/>);
         input=screen.getByText('Text')
         todoBtn=screen.getByText('Click');

     });
 
 
     test('varsayılan olarak verilen 3 nesne render edlimeli', () => { 
        const items=screen.getAllByText(/Item/i)//buradaki i büyük küçük harf duyarlılığını ortadan kaldırır!
        expect(items.length).toEqual(3); 
     });
     test('Input ve Button dökümanda bulunmalı', () => { 
        expect(input).toBeInTheDocument();//dökümandaki varlığını test ederiz
        expect(todoBtn).toBeInTheDocument();
     });
     test("Input'a string girilip butona basılınca listeye eklenmeli ", () => { 
      //önce o inputu doldurduk
        const name='huseyin';       
        userEvent.type(input,name)//bunun ile o inputu doldurabildik!
     //ardından butona tıkladık
        fireEvent.click(todoBtn)
        //assertion
       
        expect(screen.getByText(name)).toBeInTheDocument();//dom da bulunup bulunmadığını kontrol eder!
     });
     

 })