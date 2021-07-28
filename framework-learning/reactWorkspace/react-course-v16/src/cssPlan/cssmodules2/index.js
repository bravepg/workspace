import React from 'react';
// import './index.less';
import styles from './index.less';

//  开启 css modules，styles 才会存在值
console.log('styles', styles);

export default function() {
  return (
    // <div className={styles.container}>
    //   <p className={styles['container-text']}>Hello</p>  
    // </div>
    <div>
      <p className='container-text2'>Hello</p>  
    </div>
  )
}