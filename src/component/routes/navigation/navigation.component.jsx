import { Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import CartIcon from '../../cart-icon/cart-icon.components.jsx';
import CartDropdown from '../../cart-dropdown/cart-dropdown.components.jsx';
import { selectCurrentUser } from '../../../utils/store/user/user.selector.js';
import { selectIsCartOpen } from '../../../utils/store/cart/cart.selector.js';
import {ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { signOutStart } from '../../../utils/store/user/user.action.js';
import {NavigationContainer,LogoConatiner,NavLinks,NavLink}from './navigation.styles';
const Navigation=()=>{
  const dispatch=useDispatch();
  const currentUser=useSelector(selectCurrentUser);
  const isCartOpen=useSelector(selectIsCartOpen);
  const signOutUser=()=>dispatch(signOutStart());
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