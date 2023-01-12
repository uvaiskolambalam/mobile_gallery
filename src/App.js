import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ProductList,Header} from "./Components";
import { fetchUser } from "./redux/cart";



function App() {
  const {userDetails}=useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const counterRef =useRef(1)
  useEffect(() => {
    dispatch(fetchUser(counterRef.current))
  }, [])
  const loadMoreUsers = () => {
    dispatch(fetchUser(++counterRef.current))
    
    
  }
  
  return (
    <Fragment>
      <Header />
      <button onClick={loadMoreUsers}>Add more users</button>
      <pre  style={{color:"white"}}>{JSON.stringify(userDetails,undefined,4)} </pre >
      <ProductList />
    </Fragment>
  );
}

export default App;
