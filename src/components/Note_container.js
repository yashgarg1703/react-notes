import Note from "./Note";
function Note_container(props){
    const reverseArray=(arr)=>{
        const rArray=[];
        for(var i=arr.length-1;i>=0;i--)
        {
            rArray.push(arr[i]);
        }
        return rArray;
    }
   const notes=reverseArray(props.notes);
    return(
        <div className="note-container">
        <h2 className="note-heading">Notes</h2>
        <div className="note-container-notes custom-scroll">
        {
           notes.length>0 
           ?
           notes.map((item)=>
           <Note key={item.id} note={item}
            onDelete={props.onDelete}
            updateText={props.updateText}
           />)
           :
           <h2>No Notes Present</h2>
        }
            {/* <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="#ADD8E6"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="#A52A2A"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/>
            <Note text="dummy text" time="10:00 PM 07 JUN" color="orange"/> */}
        </div>
        </div>
    )
}
export default Note_container;
