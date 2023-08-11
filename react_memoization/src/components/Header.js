import React from 'react'

function Header({number,data,data2}) {
    console.log('Header components Re-rendered')
    return (
        <div>
        Header - {number}
        <br/>
        <br/>
        <code>{JSON.stringify(data)}</code>
        <br/>
        <br/>
        <code>{JSON.stringify(data2)}</code>
    </div>
  )
}

export default React.memo(Header);//bu şekilde kullandığımız takdirde app.js tekrardan render edildiğinde header değişmediği için render edilmeyecektir tekrardan.Bu şekilde gereksiz bir maliyetin önüne geçmiş oluruz.Ayrıca daha performanslı çalışmış olur! 
//bu durumda prop olarak number aldığı için number değiştiği durumlarda render edilecektir aksi halde prop olmasaydı memo kullandığımız için ve bu component sabit olduğu için app.js içerisinde sürekli render edilmeyecektir!