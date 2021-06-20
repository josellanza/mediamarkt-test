import Card from './card/card.view';
import styles from './home.module.css';
import React from 'react';
import Product from '../interface';

interface PropsHome {
  products: Product[];
  handleSearch: (event: string | null) => void;
}

const HomeView: React.FC<PropsHome> = ({ products, handleSearch }:PropsHome) => {
  return <div className={styles.main}>
    <div>
    <label>Search:</label>
    <input type="text" onChange={(e) =>handleSearch(e.target.value)} />    
    </div>
    <div className={styles.container} >
      {products.length ? (products.map(product => 
        <Card {...product} />
      ))
      :
      <div className={styles.warningMessage}>
        We could not find any products :(
      </div>}
    </div>
  </div>
}

export default HomeView;