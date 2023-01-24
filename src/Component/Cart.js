import React, {useState, useEffect} from 'react'
import "../styles/cart.css"

const Cart = ({cart, setCart, handleChange}) => {
    const[price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item)=> item.id !==id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice= () => {
        let ans = 0;
        cart.map((item) => (ans +=  item.price));
        setPrice(ans);
    };

    useEffect(()=> {
        handlePrice()
    })

    return (
        <article>
            {cart.map((item)=> (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <div className='image-filler'></div>
                        <p>{JSON.stringify(item.title)}</p>
                    </div>
            
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
                
            ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span> = {price}</span>
            </div>
        </article>
    )
}

export default Cart