/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'


describe("Copy Emoji",() =>{
    let copyEmoji;
    beforeEach(()=>{
        render(<App/>)
        copyEmoji = screen.getByText("Yum")
        console.log(copyEmoji)//span elementi
    })
    test("copy to clickboard test",()=>{
        userEvent.click(copyEmoji)
        expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😋")//span elementinin kapsayıcısı yani component'te tanımlanan div elementinde bulunan etribütü ile bu simge eşleşiyor mu buna bakar!
    })
})