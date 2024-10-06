import {title,settitle,tarea,settarea} from './Components/write_note';
function Edit(){
    return(
        <div className="edit">
         <h2><input type="text"  placeholder="title" value={title} onChange={functitle}/></h2>    
         <textarea  autoFocus="on" onChange={functarea} value={tarea} placeholder="Write a note...">
           {tarea}
         </textarea>
         <button disabled={title.length==0 && tarea.length==0} onClick={save}>Save</button>
       </div>
    );
}
export default Edit;