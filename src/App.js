import React, { useState, useEffect, useId } from 'react';
import Item from './Component/Item';
import Navbar from './Component/navbar';
import './styles/items.css';
import Cart from './Component/Cart';



function App() { 
  const [items, setItems] =  useState([]) 
  const [cart, setCart] = useState([])


  //when user clicks cart user will see data
  const handleClick = (item) => {
  setCart([...cart, item])
  // cart.push(item);
  // console.log(cart)

  }

  //incrementing cart amount per add to button
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount =1;
    setCart([...arr]);
  }

  useEffect(()=>{
    console.log("cart Change");
  },[cart]);

  const underwearBundle = ["thong", 'bikini', "brief", "boyshort"]

  const braBundle = ["bralette", 't-shirt', "no-wire", "pushup", "maternity", "active", "strapless", "wired", "unlined", "demi-pad"]

  useEffect(()=>{
    fetch('https://thingproxy.freeboard.io/fetch/https://api.jsonserve.com/8A9Dga', {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type" : "application/json"
      },
      credentials: "same-origin",
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      //console.log(data);
     const underwear = createBundles(data, "Underwear Bundle", underwearBundle )
     const bras = createBundles(data, "Bra Bundle", braBundle )
   //destructuring into one array of objects

   console.log(underwear)
  console.log(bras)
      setItems([...underwear, ...bras])
    

      // console.log(items);
    })
    .catch(error => {
      console.log(error)
    });
  },[])

//If bundle array includes a product type return items accordingly...
  function createBundles(data, bundleType, bundleArr) {


      const bundle = data.items.filter(item => {
        if (bundleArr.includes(item.product_type)) {
          item.bundleType = bundleType
          return { ...item}
        }

      })

      console.log(bundle)
      return bundle
// console.log({bundle: bundleType, items:data.items})

  }
 
  


const [show, setShow] = useState(true);
  return (
    <main>
     
    <Navbar setShow={setShow} size={cart.length} />

    <section>
    { show && items.length ?  items.map(item => <Item item={item} handleClick={handleClick}/>): <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> }</section>


 

    </main>
  );
}

export default App;