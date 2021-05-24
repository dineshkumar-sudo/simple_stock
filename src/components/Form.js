import React, { useState } from 'react';
import firebase from '../util/firebase';
import {Link} from 'react-router-dom';
import './stock.css';
export default function Form() {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');



  const handleOnChangetitle = (e) =>
  {
    setTitle(e.target.value);
  }
  const handleOnChange = (e) => {
    
    setQuantity(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      quantity,
      
    };

    todoRef.push(todo);
  };

  
  return (
    <div className = "stockdetails">
      <h1>Welcome to Stock Management </h1>
      <h3 className="crud">Your are signed in as Admin ,you can Create,delete the products in your stock</h3>
          <input className="itemsname" type="text" placeholder="Item to be add" onChange={handleOnChangetitle} value={title}  /> <br /><br />
          <input className="itemsquantity" type="number" placeholder="Quantity"onChange={handleOnChange}  value={quantity}  /> <br /><br />
          <button className="itemscreate" onClick={createTodo}>Store in Stock</button><br />
          <button className="itemssee">
            <Link class="nav-link" to="/Todo" >Click to see the stocks</Link>
          </button>
      
        
          
        
        
    </div>
  );
}
