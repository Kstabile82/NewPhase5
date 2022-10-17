import React, { useEffect, useState } from "react"; 

function Questions({ i, questions, setQuestions }) {
    const [addQs, setAddQs] = useState(false);
    let qText; 
    let correctAnswer; 
    let option; 
    
    //     function handleChange(e) {
    //     e.preventDefault();
    //     let question = q.question; 
    //     let answer = q.correct; 
    //     let incorrect = q.incorrect;    
    //     if (e.target.defaultValue === "question") {
    //         question = e.target.value
    //     }
    //     if (e.target.defaultValue === "correct") {
    //         answer = e.target.value
    //     }
    //     if (e.target.defaultValue === "incorrect") {
    //         incorrect = e.target.value
    //     }
    //     setQ(question, answer, incorrect)
    // }
    function handleUpdate(e){
        e.preventDefault();
        // fetch(`/questions/${q.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ q }),
        // })
        // .then((r) => r.json())
        // .then((updatedQ) => setQ([...questions.filter(quest => quest.id !== updatedQ.id), updatedQ]))
    }
    function handleDelete(e){
        e.preventDefault();
        // fetch(`/questions/${q.id}`, { 
        //     method: 'DELETE'
        // })
        // setQ(questions.filter(quest => quest.id !== q.id))
    }
    function handlePostQ(e) {
        e.preventDefault();
        let questiontext = qText
        let information_id = i.id
        fetch(`/newquestion`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ information_id, questiontext }),
        })
        .then((r) => r.json())
        .then((newQ) => {
            if (questions.length > 0) {
                setQuestions([...questions, newQ])
                //make sure this renders right away == may need a callback fn from Adminpage
            }
            else {
                setQuestions(newQ)
            }
            setAddQs(false)
        })
    }
    function handleNewQInput(e) {
        e.preventDefault();
        if (e.target.defaultValue === "text") {
            qText= e.target.value
        }
        if (e.target.defaultValue === "correct") {
            correctAnswer= e.target.value
        }
        if (e.target.defaultValue === "incorrect") {
            option= e.target.value
        }
    }
    function handleAddMoreQs(e) {
        e.preventDefault();
        setAddQs(true);
    }
    return (
        <div>
            {questions.map(qn => <div>
        <form 
        // onChange={handleChange}
        >
            Question:   
            <input 
            type="text" 
            id="question" 
            defaultValue={qn.questiontext}
            >
            </input>  
            <br></br>  
            Correct Answer:  
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
            <br></br>  
            <button>Add More Options</button>
            <button>Delete</button>
            <button>Save</button>
        </form>
          </div>  )}
        <button onClick={handleDelete}>Delete Question</button>
        <button onClick={handleUpdate}>Save Question</button>
        <button onClick={handleAddMoreQs}>Add More Questions</button>
        {addQs ? <div><form onChange={handleNewQInput}>
            Question:<input 
            type="text" 
            id="rescuename" 
            defaultValue="text"></input>  
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
            <br></br>  </form> <button onClick={handlePostQ}>Save</button> </div>: null }
    </div>
    )
}


export default Questions; 