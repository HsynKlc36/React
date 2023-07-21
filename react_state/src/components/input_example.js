import {useState} from "react";


function InputExample(){
    const [form,setForm]=useState({name:'',surname:'soyad giriniz'})
    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        //setForm({...form,name:'mahmut'})
        //setForm({...form,surname:'kılıç'})//name:mahmut,surname:'soyad giriniz' ve sonrasında son setForm işleminden sonraki son durum name:mahmut,surname:'kılıç' burada önce name sonra surname girildiğini düşündüğümüzdeki senaryoyu yazmış olduk(8 ve 9. satırda!).

    }
    return(
        <div>
            Name<br/>
            <input name='name' value={form.name} onChange={onChangeInput}></input>
            <br/>
            <br/>
            Surname<br/>
            <input name='surname' value={form.surname} onChange={onChangeInput}></input>
            <br/>
            <br/>
            <br/>
            {form.name} -{form.surname}
        </div>
    )
}
export default InputExample;