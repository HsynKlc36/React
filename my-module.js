// function topla(a,b){
//     return a+b;
// }


// const topla=function topla(a,b){
//     return a+b;
// }


// const topla=(a,b)=>{
//     return a+b;
// }

export const hello =(name)=>{
    // console.log("hello" +name);
    console.log(`hello ${name}`);
}

export const text="Text";
export const user={
    name:"Furkan",
    surname:"Kılıç",
}

export const users=[{name:"Furkan",
surname:"Kılıç"},{name:"Furkan",
surname:"Kılıç"}]


export const topla=(a,b)=>a+b;
export const cikar=(a,b)=>a-b;

// export default topla; default ile tek bir tane dışa aktarabilirsiniz! ve yakalarken ise import topla,{cikar,text,user} from './my-module' deriz böylelikle toplanın default olarak dışa aktarıldığını da belirtmiş olduk!