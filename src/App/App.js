import {TodoCounter} from '../TodoCounter';
import {TodoItem} from '../TodoItem/TodoItem';
import {TodoList} from '../TodoList/TodoList';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoCreateButton} from '../TodoCreateButton/TodoCreateButton';
import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const todoss = [
    {text:"Areglar la lavadora",completed:false},
    {text:"Buscar trabajo",completed:false},
    {text:"Elaborar la declaracion de renta",completed:false},
  ]
  const[searchValue, setSearchValue]= React.useState("");
  const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage("Todos_V1",[]);
  
  let completed = todos.filter(todo=>!!todo.completed).length;
  let total = todos.length;
  console.log(todos);
  const  searchTodos = todos.filter(
      (todo) =>  (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
        );  
  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ) 
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) =>{
    let  newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ) 
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  
  return (
    <>
      <TodoCounter 
      total={total}  
      completed={completed}/>
      <TodoSearch
      setSearchValue={setSearchValue} 
      />
      <TodoList>
       
        {loading && <p>Estamos Cargando</p>}
        {error && <p>Hubo un error</p>}
        {(!loading && searchTodos.length==0) && <p>Crea tu primer ToDO</p> }
        {
          
          searchTodos.map(todo => (
            <TodoItem 
            key={todo.text} text={todo.text} completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            
            />
          ))
        }
      </TodoList>
      <TodoCreateButton/>
      </>
  );
}


export default App;
