import "./Item.css";
import PaletteIcon from '@mui/icons-material/Palette';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
function Item(props)
{
const [state,setState]=useState({
   mycolor:{backgroundColor:"white"},
   openpalette:false,itemcode:[]
})
 
    function opencolor(){
        if(state.openpalette===false)
         setState((prev)=>{return{...prev,openpalette:true}})
         }

    function closecolor(){   
      setState((prev)=>{return{...prev,openpalette:false}})
        

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

    
    return(<>
        <div className="itm" style={state.mycolor} onMouseLeave={closecolor}>
            <div>
            <p id="p1">{props.passarr.titl}</p>
            <p id="p2">{props.passarr.content}</p></div>

            <div className="icons">
             <button onClick={opencolor} title="background color"><PaletteIcon /></button>
             
             <button onClick={()=>{
               setState((prev)=>{return{...prev, mycolor:{backgroundColor:"white"},}})
               props.delfunc(props.id);}}><DeleteIcon/></button>
            </div>
      
        <div className="color" style={{display:state.openpalette?"block":"none"}}>
        <button id="btn1" name="btn1" onClick={clickcolor} ></button>
        <button id="btn2" name="btn2" onClick={clickcolor} ></button>
        <button id="btn3" name="btn3" onClick={clickcolor}></button>
        <button id="btn4" name="btn4" onClick={clickcolor} ></button>
        </div>


        </div>

        
        </>
       
    );
}

export default Item;