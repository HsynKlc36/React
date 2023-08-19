/* eslint-disable testing-library/no-render-in-setup */
import {render,screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';//burası hata aldığı için user event yerine fireEvent kullandım!
import Header from '../Header.js'

describe('Header Test',()=>{
    let header
     beforeEach(()=>{
         render(<Header/>);
         header=screen.getByText(/emoji Search/i)

     });
 test('başlık kısmının başarılı bir şekilde render edildiğini test et!', () => { 
    expect(header).toBeInTheDocument();
 })
 });