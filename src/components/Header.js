import { useTitle } from "../hooks/useTitle";
import "./Header.css";
import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.png";
export const Header = () => {
  useTitle("Header");
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

      <Link to="/cart" className="items"> Cart : 2</Link>
    </header>
  )
}
