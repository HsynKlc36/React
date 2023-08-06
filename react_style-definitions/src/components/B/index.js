import React from 'react'
import styles from './styles.module.css'
console.log('B',styles);//module yazmamız sayesinde içerisindeki veriler aynı olsa bile yani title  className' lerine sahip olsalar bile unique olacaklardır ve birbirlerindeki title className'ini ezmeyecektir!asağıda ise className de çağırırken styles.title demek gerekir doğrudan title yazmamalıyız!
function B() {
  return (
    <div>
         <h5 className={styles.title}>B</h5> 
    </div>
  )
}

export default B