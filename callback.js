// setTimeout(()=>{
//     console.log("Merhaba")
// },2000)


// setInterval(()=>{
//     console.log("Hersaniye çalışıcak")
// }, 1000)




// const sayHi=(cb)=>{
//     cb();
// }
// sayHi(() => {
//     console.log("Hello");
// });


    // import fetch from "node-fetch";
    import axios from "axios";
    // import { users } from "./my-module";
    

    
    fetch("https://jsonplaceholder.typicode.com/users") 
    .then(data=>console.log(data.json()))
 
    fetch("https://jsonplaceholder.typicode.com/users")   
    .then((data)=>data.json())  
    .then((users)=>{    
        console.log("Users Yüklendi",users)   
        fetch('https://jsonplaceholder.typicode.com/posts/1')  
        .then(data=>data.json())  
        .then((posts)=>console.log("Postlar Yüklendi",posts))   
    });
    

    // async function getData(){  
    //     const users =await (  
    //         await fetch("https://jsonplaceholder.typicode.com/users")).json();

    //     console.log("users ",users);
    //     const post1 =await (   
    //         await fetch("https://jsonplaceholder.typicode.com/posts/1")).json() 
    //     console.log("post1",post1);

    //     const post2 =await (
    //         await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
    //     console.log("post2 ",post2);
    
    
    // }
    // getData();
    // (async()=>{   
    //     const {data:users} =await axios("https://jsonplaceholder.typicode.com/users")   
    //     console.log("users ",users);
    
    //     const {data:post1} =await axios("https://jsonplaceholder.typicode.com/posts/1")   
    //      console.log("post1",post1);
    
    //     const {data:post2}=await axios("https://jsonplaceholder.typicode.com/posts/2")
    //     console.log("post2 ",post2);

    // })();
    

    // const getComments=(number)=>{
    //     return new Promise((resolve,reject)=>{
    //        if(number===1){
    //         resolve("Comments");
    //        }
    //        reject("bir problem var ağam")
    //     });
    // };
    

    // getComments(2)
    // .then((data)=>console.log(data))
    // .catch((e)=>console.log(e));

    const getUsers=()=>{
        return new Promise(async(resolve,reject)=>{   
           const {data}=await axios("https://jsonplaceholder.typicode.com/users")   
           //resolve(data);   
           reject("Bir sorun oluştu hüso ağa")
    
        });
    };
    
    
    
    
    
    
    const getPost=(post_id)=>{   
        return new Promise(async(resolve,reject)=>{   
           const {data}=await axios("https://jsonplaceholder.typicode.com/posts/"+post_id)  
           resolve(data); 
        }); 
    };
    

    // getUsers()
    // .then((data)=>console.log(data))  
    // .catch((e)=>console.log(e));

    getPost(1)
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e));
    

    // (async()=>{
    //     await getUsers()
    //     .then((data)=>console.log(data))
    //     .catch((e)=>console.log(e));
    // await getPost(1)
    // .then((data)=>console.log(data))
    // .catch((e)=>console.log(e))
    // })();


    // (async()=>{
    //     try {
    //         const users=  await getUsers();
    //   const post=  await getPost(1)
    // console.log(users)
    // console.log(post)
    //     } catch (e) {
    //         console.log(e);  
    //     }
    // })();

    Promise.all([getUsers(),getPost(1)]) 
        .then(console.log)//then(data=>console.log) ikisi de çalıştırır!
        .catch(console.log);
        