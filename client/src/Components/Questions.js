import React, { useState } from "react";

function Questions() {


    return (
        <div>
       <form>
        Question:   
        <input 
        type="text" 
        id="rescuename" 
        defaultValue="test"></input>  
        <br></br>  
       Correct Answer:  
        <input 
        type="text" 
        id="rescuename" 
        defaultValue="test"></input>  
        <br></br>  
        Incorrect Option:  
        <input 
        type="text" 
        id="rescuename" 
        defaultValue="test"></input>  
        <br></br>  
        <button>Add More Options</button>
        <button>Delete</button>
        <button>Save</button>
    </form>
    <button>Add More Questions</button>
    <button>Delete</button>
    <button>Save</button>
    </div>
    )
}


export default Questions; 