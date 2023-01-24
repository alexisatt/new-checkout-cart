
export default function Item({ item, handleClick }) {
    if (item.quantity === 1) {
      return (
          <ul className='main-list'>
            <li className='cards'>
                <li className='image_box'>
                    <li className='fake-img'></li>
                </li>
                <li className='details'>
                <li >
                    <pre>
                    <code>{JSON.stringify(item.bundleType)}</code>
                    </pre>
                </li>
                <li>
                    {" "}
                    <pre>
                    <code>{JSON.stringify(item.title)}</code>
                    </pre>
                </li>
                <li>
                    <pre>
                    <code>{JSON.stringify(item.price)}</code>
                    </pre>
                </li>
                <li>
                    <pre>
                    <code>{JSON.stringify(item.quantity)}</code>
                    </pre>
                </li>
                <li>
                    <pre>
                    <code>{JSON.stringify(item.product_type)}</code>
                    </pre>
                </li>
                    <button onClick={()=>handleClick(item)}>Add to Cart</button>
                </li>
             </li>
        </ul>
      );
    }
  
   
    
  
    
  
    return <h1>no items</h1>;
  }
  