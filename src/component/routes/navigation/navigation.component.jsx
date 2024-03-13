import { Fragment,useContext} from 'react';
import {Outlet,Link} from 'react-router-dom';
import CartIcon from '../../cart-icon/cart-icon.components.jsx';
import CartDropdown from '../../cart-dropdown/cart-dropdown.components.jsx';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context.jsx';
import {ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { signOutUser } from '../../../utils/firebase/firebase.util';
import {NavigationContainer,LogoConatiner,NavLinks,NavLink}from './navigation.styles';
const Navigation=()=>{
  const {currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);
    return(
      <Fragment>
        <NavigationContainer>
            <LogoConatiner to='/'>
            <CrownLogo className='logo'/>
            </LogoConatiner>
            <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
            {currentUser ?(
            <NavLink as='span' onClick={signOutUser}>SIGN OUT </NavLink>
            ):(
            <NavLink to='/auth'>SIGN IN</NavLink>
            )}
            <CartIcon />
            
             </NavLinks>
              {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }
export default Navigation;