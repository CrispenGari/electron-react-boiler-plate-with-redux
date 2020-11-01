
import './App.css';
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setUser, addToBasket, emptyBasket} from './actions'
const electron = window.require("electron")
function App() {
  const dispatch = useDispatch()
  const basket = useSelector(state => state.basket)
  const user = useSelector(state => state.user)
  const addToBasketHandler=()=>{
      dispatch(addToBasket({
        name: "apples",
        price: 23.89,
        qnty: 56
      }))
  }
  const emptyBasketHandler=()=>{
      dispatch(emptyBasket())
  }
  const authenticationHandler =()=>{
      if(user){
        dispatch(setUser(null))
      }else{
        dispatch(setUser("User Logged"))
      }
  }
     return (
    <div className="app">
      <h1>The basket has: {basket?.length} element(s)</h1>
     <button onClick={addToBasketHandler}>Add To Basket</button>
     <button onClick={emptyBasketHandler}>Empty Basket</button>
     <br/>
     <br></br>
     {
       user? `You are loged in as: ${user}`:`You are loged Out`
     }
     <br></br>
     <br></br>
     <button onClick={authenticationHandler}>{user? "Sign Out": "Sign In"}</button>
    </div>
  );
}

export default App;
