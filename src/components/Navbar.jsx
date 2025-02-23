import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from './logo.svg'
import HomeIcon from '../assets/navbarimages/home.svg?react';
import  CartIcon  from '../assets/navbarimages/cart.svg?react';
import  WishlistIcon from '../assets/navbarimages/wishlist.svg?react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>
      <img src={Logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <li>
          <NavLink to="/">
          <HomeIcon className='Icons'  width='32px' height='32px'/>
           Home</NavLink>
        </li>
        <li>
            <NavLink to="shop">
            <CartIcon className='Icons'  width='32px' height='32px'/>
            Shop Cart</NavLink>
        </li>
        <li>
          <NavLink to="wishlist">
          <WishlistIcon className='Icons'   width='32px' height='32px'/>
          Wishlist</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;