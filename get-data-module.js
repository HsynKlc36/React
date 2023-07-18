import axios from 'axios'


const getData=async(user_id)=>{
    const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
       const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)
       return  {user,posts:[...post]}

};

export default getData;