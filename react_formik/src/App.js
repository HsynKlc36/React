
import './App.css';
import { Formik, Field, Form } from 'formik';// bu paketi npm install formik diyerek indirip o şekilde kullandık!
function App() {
  return (
    <div className="App">
 <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: 'hüseyin',
        lastName: 'kılıç',
        email: 'hsyn@gmail.com',
        gender:'female',//burası radio button olduğu için ilk başta birinin seçili gelmesini istersek burayı doldururuz!Buradaki tüm isimler name'ler ile eşleşmelidir dikkat et!
        hobies:'',
      }}
      onSubmit={ (values) => {   
        console.log(values);
      }}
    >
      {/* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field  name="firstName" placeholder="Jane" />
          <br/>
          <br/>
        <label htmlFor="lastName">Last Name</label>
        <Field  name="lastName" placeholder="Doe" />
        <br/>
          <br/>

        <label htmlFor="email">Email</label>
        <Field  name="email"  placeholder="jane@acme.com" type="email"/>
        <br/>
          <br/>
        <button type="submit">Submit</button>
      </Form> */}
      
      {({handleSubmit,handleChange,values})=>(
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
          <input type='checkbox'  name="hobies"  value='Photography'  />
           Photography
           </div>
          </div>
         
          <br/>
          <br/>

         <button type="submit">Submit</button>
          <br/>
          <br/>
          <code>{JSON.stringify(values)}</code>
       </form>
      )}
    </Formik>
       
    </div>
  );
}

export default App;
//not1:yukarıda formiğin kendi etiketleri olan Form ve Field'ı kullanmayıp kendi etiketlerimizi kullanmak istersek 2. durumu inceleyebilirsiniz!2. durumda formu submit edebilmek için onSubmit özelliğini kullanırken {handleSubmit} çağırırız ayrıca input kullandığımız için değişiklikleri yakalaması içinde onchange özelliğini kullanırsak {handleChange}'i kullanarak inputlardaki değişiklikleride yakalamış oluruz!

//not2: htmlFor'lar id arar buna dikkat et!