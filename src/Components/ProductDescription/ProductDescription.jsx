import React from 'react';
import styles from './ProductDescription.module.scss';

const ProductDescription = ({title, desc}) => {
  return (
    <section className={styles.section}>
      
      <div className={styles['product-container']}>
        
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.text}>
          {desc}
        </p>

 {/*       <p className={styles.text}>
          Such trends saw the demise of the soul-infused techno that typified the 
          original Detroit sound. Robert Hood has noted that he and Daniel Bell both 
          realized something was missing from techno in the post-rave era.
        </p> */}

      </div>
    </section>
  );
};

export default ProductDescription;