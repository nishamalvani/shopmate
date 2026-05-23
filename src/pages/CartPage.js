import { Cart } from "../components"
import{useCart} from "../context/CartContext"

export const CartPage = () => {
  const{total,cartList}=useCart();

  return (
    <main>
      <section className="cart">
        <h1>Cart Items={cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <Cart product={product} key={product.id}/>
        ))}

      </section>

    </main>

  )
}
