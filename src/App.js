import {useDispatch, useSelector } from "react-redux";
import CenterSection from "./components/centersection/CenterSection";
import LeftSection from "./components/leftsection/LeftSection";
import Nav from "./components/nav/Nav";
import RightSection from "./components/rifghtsection/RightSection";
import {login, logout, selectUser}  from './features/userSlice'
import './index.css'
import Login from './components/Login/Login'
import { useEffect } from "react";
import { auth } from "./components/centersection/firebase";

function App() {
  const user = useSelector(selectUser).user;
  const dispatch = useDispatch();
  // console.log(user.user)


  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // user is logged in
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      } else{
          dispatch(logout())
    
      }
    })
  },[])

  return (
    <>
    {!user?(<Login/>):(
      <>
      <Nav/>
        <div className="container">
        <LeftSection />
        <CenterSection photoUrl={user.photoUrl} />
        <RightSection />
      </div>
      </>
        
      )}
      </>
    
  );
}

export default App;
