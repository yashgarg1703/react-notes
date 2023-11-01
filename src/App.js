import './App.css';
import React,{useEffect, useState} from "react";
import Note_container from './components/Note_container'
import Sidebar from './components/Sidebar';
function App() {
  const [notes,setnotes]=useState(
    JSON.parse(localStorage.getItem("Notes"))||[]
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"#SE1234"
    // }
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"cyan"
    // },
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"cyan"
    // },
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"cyan"
    // },
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"cyan"
    // },
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"orange"
    // },
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"cyan"
    // },
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"cyan"
    // },
    // {
    //   text:"dummy text",
    //   time:"3:00 PM",
    //   color:"yellow"
    // }
  );
   const onPress=(color)=>{
    const temp_notes=[...notes];
    temp_notes.push({
      id:Date.now()+""+Math.floor(Math.random()*79),
      text:" ",
      time:Date.now(),
      color:color
    });
    setnotes(temp_notes);
   }
   const onDelete=(id)=>{
       const temp_notes=[...notes];
       const index=temp_notes.findIndex((item)=>item.id===id)
       if(index<0)return
       temp_notes.splice(index,1);
       setnotes(temp_notes);
   }
   useEffect(()=>{
   localStorage.setItem("Notes",JSON.stringify(notes));
   },[notes])
   const updateText=(text,id)=>{
    const temp_notes=[...notes];
       const index=temp_notes.findIndex((item)=>item.id===id)
       if(index<0)return
       temp_notes[index].text=text;
       setnotes(temp_notes);
   }
  return (
    <div className="app">
       <Sidebar onPress={onPress}/>
       <Note_container notes={notes} onDelete={onDelete}
        updateText={updateText}
       />
    </div>
  )
}

export default App;
