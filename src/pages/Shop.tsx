import './ShopStyle.css'
import { CartContext } from '../components/carts/CartContext';
import { useContext } from 'react';
import Button from '../components/buttons/Buttons';

const ShopItems = () => {

  const { cart, removeFromCart, totalItems, Checkout } = useContext(CartContext)
  return (
    <div className="cart-page">
      <h1>Your Cart ({totalItems} items)</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} width="100px" height="100px" alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price * item.quantity}</p>
                <p>Quantity: {item.quantity}</p>
                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length >= 1 && <Button onClick={() => Checkout(cart)} variant='secondary'>CheckOut</Button>}
    </div>
  )
}

export default ShopItems;