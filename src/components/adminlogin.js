import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"; 
import Form from './Form';
import './adminlogin.css';

function Adminlogin(){

    const [lfunc, setLfunc] = useState(false);

    function login(){
        var name = document.querySelector('#email');
        var pass = document.querySelector('#password');
        /* console.log(user.value);
        console.log(pass.value); */
    if (name.value === "jsp@gmail.com") 
    {
            setLfunc({ lfunc: true});
          } else {
            alert("You are not an admin");
          }
    }   
    
    

     if(lfunc)
      {
        return  <Redirect to="/Form"></Redirect> 
      }
        
    
    
    
    return (
        <div>
          
          <div className="container">
            <div className="forms-container">
    
              <div class="signin-signup">
               <form action="#" class="sign-in-form">
                 <h1 className="heading">JAYASAKTHI PRINTERS</h1>
                   <h2 className="title">Sign in with Jayasakthi Printers as Admin</h2>
                    <div className="input-field">
                       <i className="fa fa-user"></i>
                       <input type="text" className="username" placeholder="Use your Admin id" name="username" id="email"/>
                    </div>
                    
                    <div className="losp">
                          <input type="submit" className="btn" onClick={login} value="Login"/>
                          
                          
                    </div>
                   
                    
               </form>
              </div>
            </div>
   
    
          
          </div>
          
           </div>
    )
}


export default Adminlogin;








