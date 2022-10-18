import React, { useState } from "react"; 

function Options({ question }){
const [opts, setOpts] = useState([])
const [addOpt, setAddOpt] = useState(false)
    function handleAddOption(e) {
        e.preventDefault();
        setAddOpt(true)
    }
    function handleNewOptionInput(e) {
        e.preventDefault();
    }

    return (
        <div>
            {opts !== [] ? opts.map(o => 
            <div>
            <input 
            type="text" 
            id="correct" 
            defaultValue="correct"></input>  
            <br></br>  
            Incorrect Option:  
            <input 
            type="text" 
            id="incorrect" 
            defaultValue="incorrect"></input>  
            </div>
            ) : null }
            <br></br>  
            <button onClick={handleAddOption}>Add Options</button>
            {addOpt ? <div>
                Option: <input 
                type="text" 
                id="rescuename" 
                defaultValue="text"></input>  
                <br></br>  
                Correct?:
                <input 
                type="text" 
                id="rescuename" 
                defaultValue="correct"></input>  
            <br></br> <button>Save</button>
            </div> : null }
        </div>
    )
}
export default Options; 