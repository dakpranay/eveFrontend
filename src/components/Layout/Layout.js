import React, { useState,useEffect } from "react";
import Header from '../Header/Header'
import Router from '../../router/Router'
import Footer from '../Footer/Footer'


export default function Layout(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType,setUserType]=useState('regular')

    
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem("isLoggedIn");
        if (storedLoginStatus) {
          setIsLoggedIn(JSON.parse(storedLoginStatus));
        }
      }, []);
    
      // Update localStorage and state when login status changes
      const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      };
    
      const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false));

        setUserType('regular');
        localStorage.removeItem('userType');
      };

      const handleUserType = (type) => {
        setUserType(type);
        localStorage.setItem('userType', JSON.stringify(type));
      };

  
    return (
        <>
        <Header isLoggedIn={isLoggedIn}/>
        <Router handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={isLoggedIn} handleUserType={handleUserType} userType={userType}/>
        <Footer/>
        </>
    )
}