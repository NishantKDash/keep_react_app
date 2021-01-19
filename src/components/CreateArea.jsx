import React,{useState} from "react";
import notes from "../notes.js";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const[isExpanded,setExpanded]=useState(false);
  const[newNote,setnewNote]=useState({title:"",content:""});
  function handleChange(event){
    const name=event.target.name;
    const newvalue=event.target.value;

    setnewNote((prevValue)=>{
      if(name==="title"){
        return{
          title:newvalue,
          content:prevValue.content
        }
      }
        else
        if(name==="content")
        {
          return{title:prevValue.title,
          content:newvalue}
        }

      }


    )
  }
  function handleClick(event){
    event.preventDefault();
    props.onAdd(newNote);
    setnewNote({title:"",content:""});

  }
  function expand(){
    setExpanded(true);
  }


  return (
    <div>
      <form className="create-note">
        <input onClick={expand} onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />
        {isExpanded&&<textarea  onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={newNote.content}/>
        }
        <Zoom in={isExpanded}><Fab onClick={handleClick}><NoteAddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
