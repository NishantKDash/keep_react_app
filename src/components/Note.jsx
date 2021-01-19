import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from '@material-ui/core/Fab';
function Note(props){
function handleClick(){
  props.ondelete(props.id);
}
  return(<div class="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <Fab onClick={handleClick} className="note" ><DeleteIcon/></Fab>
     </div>);
}
export default Note;
