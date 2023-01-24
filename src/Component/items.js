import React, { useState, useEffect } from 'react';
import Item from './Item';



function App() { 
  const [items, setItems] =  useState([]) 

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

  // data = arr
  // bundleType = string
  function createBundles(data, bundleType, bundleArr) {
       //console.log(data);
      // const bundle = []
 
      //  for (const item of data.items){
      //   if (bundleArr.includes(item.product_type)) {
      //     console.log(item.product_type)
      //     bundle.push(item.product_type)

      //   }
      //  }

      const bundle = data.items.filter(item => {
        if (bundleArr.includes(item.product_type)) {
          item.bundleType = bundleType
          return { ...item}
        }

      })

      console.log(bundle)
      return bundle
// console.log({bundle: bundleType, items:data.items})

//        return {bundle: bundleType, items:data.items}
  }
 
  


  
  return (
    <main>
      <h1>Checkout Page</h1>

    <section className='main'>
      {items.length ? items.map(item => <Item item={item}/>) : null
      }
    </section>

    <button>Add Items To Cart</button>

    </main>
  );
}

export default App;