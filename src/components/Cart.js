import "./Cart.css"
import {useTitle, UseTitle} from "../hooks/useTitle"

export const Cart = ({product}) => {
  useTitle("Cart")
  const{name,price,image}=product
  return (
    <div className="cartCard">
      <img src={image} alt="Product Image" />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button >Remove</button>
    </div>
  )
}
