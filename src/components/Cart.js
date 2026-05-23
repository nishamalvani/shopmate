import "./Cart.css"
import {useTitle} from "../hooks/useTitle"
import { useCart } from "../context/CartContext"

export const Cart = ({product}) => {
  useTitle("Cart")
  const{removeFromCart} =useCart();
  const{name,price,image}=product
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={()=>removeFromCart(product)}>Remove</button>
    </div>
  )
}
