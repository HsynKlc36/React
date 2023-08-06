import {useState,useEffect} from 'react'
const initialFormValues={fullName:'',phone_Number:''};

function Form({addContact,contacts}) {
    const[form,setForm]=useState(initialFormValues);
   const onChangeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
   }

useEffect(()=>{
setForm(initialFormValues)
},[contacts])//bu şekilde de yapılabilir yani her yeni eklemede contact'lara veri eklendikçe setForm ile inputların içerisini boşalt demektir!

   const onSubmitt=(e)=>{
    e.preventDefault();
     if(form.fullName==='' || form.phone_Number===''){
        return false
     };
     addContact([...contacts,form]);//bu aslında setForm'u temsil eden bir state'tir!
     //setForm(initialFormValues)// bu şekilde form submit edildiğinde inputların içerisi boşaltılır! bunu useEffect ilede yapabiliriz
   }
  return (
    <div>
        <form onSubmit={onSubmitt}>
        <div>
     <input name='fullName' value={form.fullName} placeholder='Full Name' onChange={onChangeInput}></input>
        </div>
        <div>
     <input name='phone_Number' value={form.phone_Number} placeholder='Phone Number' onChange={onChangeInput}></input>
        </div>
        <div>
            <button>Add</button>
        </div>
        </form>  
    </div>
  )
}

export default Form