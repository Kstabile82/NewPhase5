import React, { useState } from "react"; 
function Questions(i) {
const [q, setQ] = useState({question: "question", correct: "correct", incorrect: "incorrect"})
function handleChange(e) {
    e.preventDefault();
    let question = q.question; 
    let answer = q.correct; 
    let incorrect = q.incorrect;    
    if (e.target.defaultValue === "question") {
        question = e.target.value
    }
    if (e.target.defaultValue === "correct") {
        answer = e.target.value
    }
    if (e.target.defaultValue === "incorrect") {
        incorrect = e.target.value
    }
    setQ(question, answer, incorrect)
}
    return (
        <div>
        <form onChange={handleChange}>
            Question:   
            <input 
            type="text" 
            id="rescuename" 
            defaultValue="question"></input>  
            <br></br>  
            Correct Answer:  
            <input 
            type="text" 
            id="rescuename" 
            defaultValue="correct"></input>  
            <br></br>  
            Incorrect Option:  
            <input 
            type="text" 
            id="rescuename" 
            defaultValue="incorrect"></input>  
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