import { NavLink } from 'react-router-dom';
import './header.css'
import { headerConstant } from '../../constant';
const Header = () => {
  return(
    <div className='header'>
      <ul className='header-cont'>
          {
            headerConstant.map((item)=>{
              return  (
                <li className='item' >
                <NavLink to={item.link}> {item.name} </NavLink>
                 </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default Header;