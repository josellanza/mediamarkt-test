import styles from './card.module.css';
import React from 'react';
import Product from '../../interface';

const CardView: React.FC<Product> = ({ name, description, image, number, price }:Product) => {
  return (
    <div className={styles.container} >
      <img className={styles.image} src={image} alt="hello" />
      <div>
        <div className={styles.cell} >
          {name}
        </div>
        <div className={styles.cell} >
          {description}
        </div>
        <div className={styles.cell} >
          {number} units
        </div>
        <div className={styles.price} >
          {price}€
        </div>
      </div>
    </div>
    );
}

export default CardView;