import deleteImg from './delete.jpg'
function Note(props){
    let timer=500,timeout;
    const formatDate=(value)=>{
        const day_name=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        const month_name=["Jan","Feb","Mar","May","June","July","Aug","Sep","Oct","Nov","Dec"]
        if(!value)return""
       let date=new Date(value);
       let date_1=date.getDate();
    
       let hrs=date.getHours();
       let AMPM=hrs>12?"PM":"AM";
       hrs?hrs=hrs:hrs="12";
       hrs>12?hrs=hrs-12:hrs=hrs;
       
       let mins=date.getMinutes();
       mins>=10?mins=mins:mins="0"+mins
       let day=date.getDay();
     
       let month=date.getMonth();

       return `${hrs}:${mins} ${AMPM} ${day_name[day]} ${date_1} ${month_name[month-1]}`
    }

    const debounce=(func)=>{
        clearTimeout(timeout);
        timeout=setTimeout(func,timer);

    }
    const updateText=(text,id)=>{
        debounce(()=>props.updateText(text,id));
    }

    return(
        <div className="notes" style={{backgroundColor:props.note.color}}>
        <textarea className="notes_text" defaultValue={props.note.text}
        onChange={(event)=>updateText(event.target.value,props.note.id)}></textarea>
        <div className="note-footer">
        <p className='note-para'>{formatDate(props.note.time)}</p>
        <img className="deleteImg" src={deleteImg} alt="delete"onClick={()=>props.onDelete(props.note.id)}/>
        </div>
        </div>
    )
}
export default Note;