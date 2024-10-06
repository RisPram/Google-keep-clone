
import {  useState } from "react";
import Item from "./Item";
import "./writenote.css";
function Writenote()
{
    

    let [type,settype]=useState(false);
    function switchh1()  
    {
      if(type===false)
        settype(true);
      
    }
    function switchh2(){
        if(type===true)
          settype(false);
        
      }

      let [title,settitle]=useState("");      //title
      function functitle(event){
         settitle(event.target.value);}

    let [tarea,settarea]=useState("");        //textarea
    function functarea(event){
        settarea(event.target.value);} 

      let [arr,setarr]=useState([]); //array of objects
      function save(){
        setarr([{titl:title,content:tarea},...arr]);
        
        settarea("");
        settitle("");
        settype(false);}

        //filter func modified array return krta hai
        function deletee(selectedindex){
            setarr(arr.filter((ele,index)=>{return index!==selectedindex;}))
        }


//ternary operator ka use krte hue..
    return(<>{ type===false?
        (<div className="wn1" >
        <input type="text" placeholder="Take a note..." onClick={switchh1} />
        </div>)            :

        (<div className="wn2"  onDoubleClick={switchh2}>
        <h2><input type="text" placeholder="Title" value={title} onChange={functitle}/></h2>    
        <textarea placeholder="Write a note..." autoFocus="on" onChange={functarea} value={tarea}></textarea>
        <button disabled={title.length==0 && tarea.length==0} onClick={save}>+</button>
        </div>)
       }      
       <div className="showitems">
       {arr.map((ele,index)=>{ 
        return(<Item passarr={ele} key={index} id={index}  delfunc={deletee}/>);})  }
       </div>


    
       
       {/* <div className="edit">
         <h2><input type="text"  placeholder="title" value={title} onChange={functitle}/></h2>    
         <textarea  autoFocus="on" onChange={functarea} value={tarea} placeholder="Write a note...">
           {tarea}
         </textarea>
         <button disabled={title.length==0 && tarea.length==0} onClick={save}>Save</button>
       </div> */}
    </>

    );
}
export default Writenote;
