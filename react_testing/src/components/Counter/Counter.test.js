/* eslint-disable testing-library/no-render-in-setup */
import {render,screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';//burası hata aldığı için user event yerine fireEvent kullandım!
import Counter from "./Index";


// test('increase btn', () => { 
//     render(<Counter/>);// hangi compenenti render etmek istiyorsan yazarsın
//     const count=screen.getByText('0')//içerisinde 0 yazan elementi al
    
//         const increaseBtn=screen.getByText('Increase');//screen ise document gibi kullanılır dom içerisindeki tüm verilere bakar
//          fireEvent.click(increaseBtn);//bu event ile istediğimiz işlemi yaptırabiliriz
      
//         expect(count).toHaveTextContent('1'); // burada ise tıklandığında ne beklediğini soruyor yani değerinin değişmesini istediğin elemanı girip 2. parametre ile de artık orada ne yazması gerektiğini belirtiyorsun
// });

// test('decrease btn', () => { 
//     render(<Counter/>);// hangi compenenti render etmek istiyorsan yazarsın
//     const count=screen.getByText('0')//içerisinde 0 yazan elementi al
    
//         const decreaseBtn=screen.getByText('Decrease');//screen ise document gibi kullanılır dom içerisindeki tüm verilere bakar
//          fireEvent.click(decreaseBtn);//bu event ile istediğimiz işlemi yaptırabiliriz
      
//         expect(count).toHaveTextContent('-1'); // burada ise tıklandığında ne beklediğini soruyor yani değerinin değişmesini istediğin elemanı girip 2. parametre ile de artık orada ne yazması gerektiğini belirtiyorsun
// });

describe('Counter Test',()=>{
   let count,increaseBtn,decreaseBtn
    beforeEach(()=>{
        console.log('her testen önce tekrar çalışacağım');
        render(<Counter/>);// hangi compenenti render etmek istiyorsan yazarsın
        count=screen.getByText('0')//içerisinde 0 yazan elementi al
        increaseBtn=screen.getByText('Increase');//screen ise document gibi kullanılır dom içerisindeki tüm verilere bakar
        decreaseBtn=screen.getByText('Decrease');//screen ise document gibi kullanılır dom içerisindeki tüm verilere bakar
    });//teste başlamadan önce yapmak istediklerinizi belirtirsiniz!ayrıca her test için tekrar tekrar çalışacaktır!

    beforeAll(()=>{
        console.log('ilk başta tek bir kez çalışacağım')
    })
    
    afterEach(()=>{
        console.log('her testen sonra birkere çalışacağım');
    })
    afterAll(()=>{
        console.log('tüm testlerden sonra en son bir kere çalışacağım');
    })

    test('increase btn', () => { 
             fireEvent.click(increaseBtn);//bu event ile istediğimiz işlemi yaptırabiliriz
            expect(count).toHaveTextContent('1'); // burada ise tıklandığında ne beklediğini soruyor yani değerinin değişmesini istediğin elemanı girip 2. parametre ile de artık orada ne yazması gerektiğini belirtiyorsun
    });
    
    test('decrease btn', () => { 
             fireEvent.click(decreaseBtn);//bu event ile istediğimiz işlemi yaptırabiliriz         
            expect(count).toHaveTextContent('-1'); // burada ise tıklandığında ne beklediğini soruyor yani değerinin değişmesini istediğin elemanı girip 2. parametre ile de artık orada ne yazması gerektiğini belirtiyorsun
    });
})

//NOTLAR:
//aynı component için birden fazla test yazıyorsan describe() fonksiyonu altında testleri toplayıp ortak bileşenleri global olarak tanımlayabilirsiniz.Böylece test kodlarınız daha sade olacaktır!

//npm test ile test edebilirsiniz!
