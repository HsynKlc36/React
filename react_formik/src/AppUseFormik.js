
import './App.css';
import { useFormik } from 'formik';

function AppUseFormik() {
    const {handleSubmit,handleChange,values} = useFormik({
        initialValues: {
        firstName: 'hüseyin',
        lastName: 'kılıç',
        email: 'hsyn@gmail.com',
        gender:'female',//burası radio button olduğu için ilk başta birinin seçili gelmesini istersek burayı doldururuz!Buradaki tüm isimler name'ler ile eşleşmelidir dikkat et!
        hobies:[],// checkbox olduğu için birden fazla seçim yapabilir bu yüzden boş bir array tanımladık!
        country:'turkey'
        },
        onSubmit: values => {
            console.log(values);
           
        },
      });
  return (
    <div className='App'>
 <h1>Sign Up(with useFormik)</h1>
 <form onSubmit={handleSubmit}>
         <label htmlFor="firstName">First Name</label>
         <input  name="firstName" value={values.firstName} placeholder="Jane" onChange={handleChange} />
           <br/>
           <br/>
         <label htmlFor="lastName">Last Name</label>
         <input  name="lastName" value={values.lastName} placeholder="Doe" onChange={handleChange} />
         <br/>
           <br/>
 
         <label htmlFor="email">Email</label>
         <input  name="email"  value={values.email} placeholder="jane@acme.com" type="email" onChange={handleChange}/>
         <br/>
          <br/>

         <span>Male</span>
         <input type='radio'  name="gender"  value='male' onChange={handleChange} checked={values.gender==='male'}/>
         <span>Female</span>
         <input type='radio'  name="gender"  value='female' onChange={handleChange} checked={values.gender==='female'}/>
          <br/>
          <br/>
          <div>
          <span>Hobies</span>
           <div>
           <input type='checkbox'  name="hobies"  value='Football' onChange={handleChange} />
           Football
           </div>
           <div>
           <input type='checkbox'  name="hobies"  value='Cinema' onChange={handleChange} />
           Cinema
           </div>
           <div>
          <input type='checkbox'  name="hobies"  value='Photography' onChange={handleChange} />
           Photography
           </div>
          </div>
         
          <br/>
          <br/>

          <select name='country' value={values.country} onChange={handleChange}>
            <option value='turkey'>Turkey</option>
            <option value='england'>England</option>
            <option value='usa'>USA</option>
          </select>
          <br/>
          <br/>

         <button type="submit">Submit</button>
          <br/>
          <br/>
          <code>{JSON.stringify(values)}</code>
       </form>
    </div>
  )
}

export default AppUseFormik
//useFormik ile return kısmını daha sade bir şekilde oluşturmamız sağlanır!