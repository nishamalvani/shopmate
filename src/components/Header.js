import { useTitle } from "../hooks/useTitle";
import "./Header.css";
import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";
export const Header = () => {
  useTitle("Header");
  const {cartList} =useCart();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopping cart logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>

      <Link to="/cart" className="items"> 
      <span>
        Cart : {cartList.length}
      </span>
      </Link>
    </header>
  )
}
