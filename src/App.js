import {TodoCounter} from './TodoCounter';
import {TodoItem} from './TodoItem';
import {TodoList} from './TodoList';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import React from 'react';
const defaultTodos =[
{text:"Hacer el checking",completed:false},
{text:"aprender React",completed:false},
{text:"Aprender Manejo de array con javascript",completed:false},
{text:"Activar el roaming",completed:false},
{text:"Ir a comer algo",completed:true},



];
function App() {
  const[searchValue, setSearchValue]= React.useState("");
  const[todos,setTodos] = React.useState(defaultTodos);
  let completed = todos.filter(todo=>!!todo.completed).length;
  let total = todos.length;

  const  searchTodos = todos.filter(
      (todo) =>  (todo.text.toLowerCase().includes(searchValue.toLowerCase())) 
        
        );  
  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ) 
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
  const deleteTodo = (text) =>{
    let  newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ) 
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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
      <CreateTodoButton/>
      </>
  );
}





export default App;
