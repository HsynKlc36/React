import {useState} from 'react'

function List({contacts}) {
    const [filter,setFilter]=useState('');

    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
        item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
        );
    });//filtreleme işlemi yaptık!
  return (
    <div>
    <input placeholder='Filter Contact' value={filter} onChange={(e)=>setFilter(e.target.value)}>

    </input>

        <h5>Contact List</h5>
      <ul className='list'>
        {filtered.map((contact,i)=>{
         return <li key={i}>{`${contact.fullName} - ${contact.phone_Number}`}</li>
        })}
      </ul>
      <p>total contact ({filtered.length})</p>
    </div>
  )
}

export default List