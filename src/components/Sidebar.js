import add from './add.png'
function Sidebar(props){
    let click=true;
    const colours=["#ADD8E6","#FFCCCC","#E5CCFF","#FFCCFF","#FFC0CB","#FFF","#FFFF99"]
    const onClick=()=>{
       if(click===true)
       {
       document.getElementById("enable").classList.add("enable");
       click=false;
       }
       else
       {
        document.getElementById("enable").classList.remove("enable");
        click=true;
       }
    //    console.log("done");
    }
    return(
        <div className="sidebar">
         <img className="add" src={add} alt="add" onClick={onClick}/>
        
         <ul id="enable" className="sidebar-list">
         {
            colours.map((name,index)=>
            <li key={index}
            className="sidebar-list-item" 
            style={{backgroundColor:name}}
            onClick={()=>props.onPress(name)}
            />)
         }
            
         </ul>
        </div>
    )
}
export default Sidebar;