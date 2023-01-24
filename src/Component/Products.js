import React from 'react';
import Item from './Item';

const Products = ({items}) => {
    return(
        <section>
    <h2>hi</h2>
    
       
          {items.length ? items.map(item => <Item item={item}/>) : null
          }
        </section>
    )
}

export default Products