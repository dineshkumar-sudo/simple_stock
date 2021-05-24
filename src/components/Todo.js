import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import firebase from '../util/firebase';

import './todo.css';

export default function Todo({ todo }) {

  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('Todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  const deleteTodo = (todo,e) => {
    
    e.preventDefault();
    const todoRef = firebase.database().ref('Todo').child(todo.id);

    todoRef.update({quantity : todo.quantity-1});
    if(todo.quantity-1 <= 0)
    {
      

      emailjs.sendForm('service_72b0qdh', 'template_635eepc', e.target , 'user_NmjjDR3E0BFJ3x3zLmlIa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        var ack = todo.title;
        var result = ack.concat(" Ordered Successfully");
        alert(result);
    }

    
  };

const list = todoList&&todoList.map(item => {return (

  <div className="nqa">
      <form key={item.id} onSubmit={e=>{deleteTodo(item,e)}}> 
      
      <input  className="nameofitem" value={item.title} disabled name="title"/>
      <input value={item.quantity} disabled name="quantity"/> 
      
      <button className="dbut" type="submit" >Delete</button>
      
      </form>
  </div>
)})


  
  
  return (
    <div>
      <table>
        <thead>
        <tr>
          
          <div className="headings">
          <th >Name</th>
          <th >Quantity</th>
          <th >Action</th>
          </div>
        </tr>
        </thead>
        
      </table>
      {list}
      
    </div>
  );
}
