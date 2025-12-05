import React from 'react';
import styles from './ProductDescription.module.scss';

const ProductDescription = () => {
  return (
    <section className={styles.section}>
      
      <div className={styles['product-container']}>
        
        <h2 className={styles.title}>About the place</h2>

        <p className={styles.text}>
          Minimal techno is a minimalist subgenre of techno music. It is characterized 
          by a stripped-down aesthetic that exploits the use of repetition and 
          understated development. Minimal techno is thought to have been 
          originally developed in the early 1990s by Detroit-based producers Robert 
          Hood and Daniel Bell.
        </p>

        <p className={styles.text}>
          Such trends saw the demise of the soul-infused techno that typified the 
          original Detroit sound. Robert Hood has noted that he and Daniel Bell both 
          realized something was missing from techno in the post-rave era.
        </p>

      </div>
    </section>
  );
};

export default ProductDescription;