import axios from 'axios'


const getData=async(user_id)=>{
    const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
       const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)
       return  {user,posts:[...post]}

};
console.log('başladı')
 getData(1).then(console.log)//burada cevabı döner çünkü api den gelen sonucu alırken biraz bekler ve cevabı alıp then ile islemine devam eder bu sıradaki kodlar asenkron olarak akmaya devam eder(burada then sadece promise dönen nesnelerde çalışmaz asenkron yapıdaki dönen cevaplarda da çalışır!) yani;
 //başladı
 //devam ediyor...
 //bitti
 //getData dan dönen cevap burada olacaktır!
console.log('devam ediyor...')
console.log('bitti')
//fakat aşağıdaki kod gibi yazarsak asenkron bir işlem olduğu için promise{<pending>} yazacaktır
 console.log(getData(1));
 //dikkat!fakat 21.satırdaki kod gibi yazarsak asenkron bir işlem olduğu için(getData()) await ile cevabı bekleyecek ve ekrana nesneyi  yazacaktır
 console.log(await getData(1));
export default getData;