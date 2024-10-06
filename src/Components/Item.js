import "./Item.css";
import PaletteIcon from '@mui/icons-material/Palette';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
function Item(props)
{

    let [mycolor, setcolor]=useState({backgroundColor:"white"});// item wle container ka color
 
    let [openpalette, setpalette]=useState(false);
    function opencolor(){
        if(openpalette===false)
           setpalette(true);}

    function closecolor(){   
        
           setpalette(false);

    }
    let [itemcode,setitemcode]=useState([]);

  function clickcolor(event){
    if(event.target.name==="btn1")
       {setcolor({backgroundColor:"rgb(251, 251, 48)"}); }
    else if(event.target.name==="btn2")
       {setcolor({backgroundColor:"rgb(189, 250, 118)"});}
    else if(event.target.name==="btn3")
       {setcolor({backgroundColor:"rgb(253, 144, 189)"});}
    else if(event.target.name==="btn4")
       {setcolor({backgroundColor:"aquamarine"});}

       setitemcode([...itemcode,{id:props.id,color:mycolor}]);
    }

    
    return(<>
        <div className="itm" style={mycolor} onMouseLeave={closecolor}>
            <div>
            <p id="p1">{props.passarr.titl}</p>
            <p id="p2">{props.passarr.content}</p></div>

            <div className="icons">
             <button onClick={opencolor} title="background color"><PaletteIcon /></button>
             
             <button onClick={()=>{props.delfunc(props.id);}}><DeleteIcon/></button>
            </div>
      
        <div className="color" style={{display:openpalette?"block":"none"}}>
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