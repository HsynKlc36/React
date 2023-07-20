import PropTypes from 'prop-types'
//1.yol
// function User(props){
//     console.log(props)
//     return <div> {props.isLogIn ? `${props.name} ${props.surname} ve ${props.number1}`:`lütfen giriş yapınız`}</div>
// }
//2.yol=> props object olduğu için aşağıdaki gibide parametreleri yakalayabiliriz!.Parametrelerin sırası önemli değildir!
function User({name,surname,isLogIn,number1,friends,address}){
   
    return (
    <>
        <h5>
        {isLogIn ? `${name} ${surname} ve ${number1}`:`lütfen giriş yapınız`}
        </h5>

        {address.title} /{address.zip}
         {/* {friends.map((friend,index)=>(
         <div key={index}>
            {index}-{friend}
            </div>
         ))} burada string dizi tanımladık bir aşağısında ise nesnelerin olduğu bir dizi tanımladık! */}
        {friends.map(friend=>(
         <div key={friend.id}>
            {friend.id}-{friend.name}
            </div>
        
         ))}
     </>);
}
User.propTypes={
    name:PropTypes.string.isRequired,
    surname:PropTypes.string,
    isLogIn:PropTypes.bool,
    number1:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    friends:PropTypes.array,
    address:PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    }),
}
User.defaultProps={
    isLogIn:false,
    name:'İsimsiz kişi'
};
//defaultProps => değer atanmayan propslarda hata almamak için default props tanımlarız!fakat burada şu bilinmelidir ki! eğerki tanımlarsanız burdaki default değeri ezecektir fakat böyle birşey tanımlanmazsa componentte bunu karşılarken default değeriyle karşılayacaktır

//yukarıda user'ın propTypes ile tiplerini belirtirsek component e gelen propsların value'ları bunları karşılamalıdır!yoksa hata verecektir!

//isRequared=> ile zorunlu hale getiriyoruz yani name değeri gönderilmek zorundadır.
//oneOfType=> birden fazla tiple karşılamak için kullanılır!

//not2:key keywordu ile döngülerde dolaşırken benzersiz bir key vermemiz gereklidir!

export default User; //import ettiğimiz yerde propslar veririz ve gelip yazdığımız component'te yani burada gelip kullanabiliriz! ayrıca props bir object 'dir!

//son olarak props lar aynı tag'lar da parametreler verildiği gibi yani class id gibi oluşturduğumuz componentlere de bu tarz parametreler verebiliriz ve bunlara props denir!
