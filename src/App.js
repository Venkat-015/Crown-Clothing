import {useEffect,lazy,Suspense} from "react";
import {useDispatch} from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import Spinner from "./component/spinner/spinner.component";
import { checkUserSession } from "./utils/store/user/user.action";
const Home=lazy(()=>import("./component/routes/home/home.component"));
const Authentication=lazy(()=>import('./component/routes/authentication/authentication.components'));
const Navigation=lazy(()=>import('./component/routes/navigation/navigation.component'));
const Shop=lazy(()=>import('./component/routes/shop/shop.component'));
const CheckOut=lazy(()=>import('./component/routes/checkout/checkout.routes'));
const App=() =>{
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(checkUserSession());
    },[]);

  return (
    <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path="shop/*" element={<Shop />}/>
      <Route path="auth" element={<Authentication />}/>
      <Route path="checkout" element={< CheckOut />}/>
      </Route>
          </Routes>
          </Suspense>
   )
}
export default App;
