import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import Order from './Order';

const showOrders = (props)=>{

  let summa=0
  props.orders.forEach(el => summa+= Number.parseFloat(el.price));
  return (<div>
    {props.orders.map(el=> (
              <Order onDelete={props.onDelete} key={el.id} object={el}/>
            ))}

            <p className='summa'>Total sum: {new Intl.NumberFormat().format(summa)}</p>
  </div>)
}

const showNothing=()=>{
  return (<div className='empty'>
    <h2> No orders</h2>
  </div>)
}

export default function Header(props) {

  let [cartOpen,setCartOpen]=useState(false)

  return (
    <header>
    <div>
      <span className='logo'>Clothing Brand</span>
      <ul className='nav'>
            <li>About us</li>
            <li>Contacts</li>
            <li>Reviews</li>
      </ul>
      <FaShoppingBag onClick={()=>setCartOpen(cartOpen =! cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length>0 ?
            showOrders(props):showNothing()}
          </div>
        )}
    </div>

    <div className='presentation'></div>
    </header>
  )
}
