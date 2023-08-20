import React from "react";

function useLocalStorage(itemName,initialValueState)  {
    
    const [item,setItem] = React.useState(initialValueState);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    
    
    React.useEffect(()=>{
     setTimeout(()=>{
      try {
        let defaultItem = JSON.parse(localStorage.getItem(itemName));
        if(null !== defaultItem){
          setItem(defaultItem);      
        }else if (null === defaultItem){
          localStorage.setItem(itemName,JSON.stringify(initialValueState));
        }else{
        }
      } catch (error) {
        setError(true);
      } finally{
        setLoading(false);
      }
      setLoading(false);  
     },2000)        
    },[])

    const saveItem = (newTodos)=>{
        localStorage.setItem(itemName,JSON.stringify(newTodos));
        setItem(newTodos);
      }

    return {
        item,
        saveItem,
        loading,
        error
    }
  }
  
  export {useLocalStorage};