import React, { useEffect, useState } from 'react';



const CartList = ({ cart }) => {

  const [CART, setCART] = useState([])

  useEffect(() => {
    setCART(cart)
  }, [cart]
  )


  return (
    <div className=''>

      {CART?.map((CartItem, CartIndex) => {
        return (
          <div>


            <img src={CartItem.url} width={40} />
            <span>{CartItem.name}</span>


            <button
            onClick={() => {
              const _CART = CART.map((item, index) => {
                return CartIndex === index ? { ...item, quantity: item.quantity>0 ? item.quantity- 1 :0 } : item
              })
              setCART(_CART)
            }}
            >-</button>

            <span>{CartItem.quantity}</span>

            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return CartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                })
                setCART(_CART)
              }}
            > + </button>
            <span>Rs.{CartItem.price * CartItem.quantity}</span>

          </div>
        )



      })}
      <>
        <p> Total  <span></span>
          {
            CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
          }
        </p>
      </>

    </div>

  )
}


export default CartList;