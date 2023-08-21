import {TodoCounter} from '../TodoCounter';
import {TodoItem} from '../TodoItem/TodoItem';
import {TodoList} from '../TodoList/TodoList';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoCreateButton} from '../TodoCreateButton/TodoCreateButton';
import React, { useState } from 'react';
import {TodoContext,TodoProvider} from '../TodoContext/TodoContext'
import { Modal } from '../Modal/Modal';
import { TodoCreateForm } from '../TodoCreateForm/TodoCreateForm';
function App() {
 
  
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {(
          { total,
            completed,
            setSearchValue,
            loading,error,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
          })=>(
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
                <TodoCreateButton setOpenModal={setOpenModal}/>
               {openModal && (
                <Modal>
                  <TodoCreateForm></TodoCreateForm>
                </Modal>
               )}
            </>
        )}
      </TodoContext.Consumer>
      </TodoProvider>
  );
}


export default App;
