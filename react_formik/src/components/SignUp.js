import React from 'react'
import { useFormik } from 'formik';
import validations from './validations'

function SignUp() {
    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues: {
        email: 'hsyn@gmail.com',
        password:'',
        passwordConfirm:'',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema:validations
      });

  return (
 
        <div className='App'>
            <span>Form Validators</span>
                <h1>Sign Up(with Form Validation)</h1>
        <form onSubmit={handleSubmit}>
       
         <label >Email</label>
         <input  name="email"  value={values.email} placeholder="jane@acme.com" type="email" onChange={handleChange} onBlur={handleBlur}/>
         {errors.email&&touched.email && <div className='error'>{errors.email}</div>}
         <br/>
          <br/>
          <label >Password</label>
         <input  name="password"  value={values.password}  type="password" onChange={handleChange} onBlur={handleBlur}/>
         {errors.password&&touched.password && <div className='error'>{errors.password}</div>}
         <br/>
          <br/>
          <label >Password Confirm</label>
         <input  name="passwordConfirm"  value={values.passwordConfirm}  type="password" onChange={handleChange} onBlur={handleBlur}/>
         {errors.passwordConfirm&&touched.passwordConfirm&& <div className='error'>{errors.passwordConfirm}</div>}
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

export default SignUp;
//burada errors useFormikten gelen hataların kontrolü ve gösterilmesi için kullanılır.Yani yapılan validasyonlara bağlı hataları gösterebilmemiz içindir.Validasyonlardan gelen hata mesajlarına buradan erişilir.Touched ise o inputa focuslanılmış mı yani şuan oraya mı veri giriliyor gibi bir özellik sağlar bunun sayesinde focus'lanılmayan inputların hataları ekranda görünmemiş olur!

//burada handleBlur ile hatalı bir değer girmişsem inputa ya da hatalı formatta giriş yapıldıysa bir sonraki inputa focuslandığında hatalı giriş yapılan input için error hata mesajını altında göstermesine yarar!

//values ise formdaki verileri bize verir!