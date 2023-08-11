import React from 'react'

function Header2({increment}) {
    console.log('Header components Re-rendered')
    return (
        <div>
        Header2 
        <br/>
        <br/>
        <button onClick={increment}>Click</button>
    </div>
  )
}

export default React.memo(Header2) 