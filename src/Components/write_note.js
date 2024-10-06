
import {  useState } from "react";
import Item from "./Item";
import "./writenote.css";
function Writenote()
{
    const [state,setState]=useState({
      type:false,
      title:"",tarea:"",arr:[]
    })

    function switchh1()  
    {
      if(state.type===false)
      setState((prev)=>{return{...prev,type:true}})
    }
    function switchh2(){
        if(state.type===true)
          setState((prev)=>{return{...prev,type:false}})
        
      }

    function functitle(event){
      setState((prev)=>{return{...prev,title:event.target.value}})
    }

    function functarea(event){
      setState((prev)=>{return{...prev,tarea:event.target.value}})

      } 

    function save(){
        
        setState((prev)=>{return{...prev, type:false,
          title:"",tarea:"",arr:[{titl:state.title,content:state.tarea},...state.arr]}})

        
        }

        //filter func modified array return krta hai
    function deletee(selectedindex){
          setState((prev)=>{return{...prev, type:false,
            title:"",tarea:"",arr:state.arr.filter((ele,index)=>{return index!==selectedindex;})}})

        }

        function clickcolor(event){
          let x
           if(event.target.name==="btn1")
              {x={backgroundColor:"rgb(251, 251, 48)"} }
           else if(event.target.name==="btn2")
              {x={backgroundColor:"rgb(189, 250, 118)"}}
           else if(event.target.name==="btn3")
              {x={backgroundColor:"rgb(253, 144, 189)"}}
           else if(event.target.name==="btn4")
              {x={backgroundColor:"aquamarine"}}
       
              setState((prev)=>{return {...prev,mycolor:x, itemcode:[...state.itemcode,{id:props.id,color:state.mycolor}] }})
           }
//ternary operator ka use krte hue..
    return(<>{ state.type===false?
        (<div className="wn1" >
        <input type="text" placeholder="Take a note..." onClick={switchh1} />
        </div>)            :

        (<div className="wn2"  onDoubleClick={switchh2}>
        <h2><input type="text" placeholder="Title" value={state.title} onChange={functitle}/></h2>    
        <textarea placeholder="Write a note..." autoFocus="on" onChange={functarea} value={state.tarea}></textarea>
        <button disabled={state.title.length==0 && state.tarea.length==0} onClick={save}>+</button>
        </div>)
       }      
       <div className="showitems">
       {state.arr.map((ele,index)=>{ 
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
