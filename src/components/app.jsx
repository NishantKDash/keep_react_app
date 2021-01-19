import React,{useState} from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./Note.jsx";

import CreateArea from "./CreateArea";




function App(){
  const [notes,setNotes]=useState([]);
  function addNote(note){
    setNotes((prevNotes)=>{
      return [...prevNotes,note]

    });


  }
  function deleteNote(id){
    console.log("delete button was clicked");
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      });
    });
  }
  return(<div>
    <Header />
    <CreateArea onAdd={addNote} />

     {notes.map((noteItem,index)=>{
    return<Note key={index} id={index} title={noteItem.title} content={noteItem.content} ondelete={deleteNote}/>

      })}
      <Footer />


      </div>

)}

export default App;
