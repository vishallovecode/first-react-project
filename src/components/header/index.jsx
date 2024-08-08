import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
  return(
    <div className='header'>
      <ul className='header-cont'>
        <li className='item' >
         <NavLink to='/square'> Square </NavLink>
          </li>
        <li className='item'>Card</li>
        <li className='item'>Counter</li>
      </ul>
    </div>
  )
}

export default Header;