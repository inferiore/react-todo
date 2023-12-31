import { DeleteIcon } from "../TodoIcon/DeleteIcon/DeleteIcon"
import { CompleteIcon } from "../TodoIcon/CompleteIcon/CompleteIcon"
import "./TodoItem.css"
function TodoItem(props){
  {
    return(
    <li className="TodoItem">
      <CompleteIcon 
        completed={props.completed} 
        onComplete={props.onComplete}
      />
      
      <p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete}
/>
    </li>);}

}
function deleteTodo(){
  console.log("Click");
}
export {TodoItem};