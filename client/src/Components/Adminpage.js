import React, { useState } from "react";

function Adminpage({ user, rescue, handleRemoveAdmin, handleAddAdmin }) {
    const [viewedUsers, setViewedUsers] = useState([])
    const [clicked, setClicked] = useState("")
    const [showingInfoForms, setShowingInfoForms] = useState(false)
    const [addMoreQs, setAddMoreQs] = useState(false)
    const [numberOfQs, setNumberOfQs] = useState(1)
    const [numberOfOptions, setNumberOfOptions] = useState(1)
    const [questions, setQuestions] = useState([])
    const [info, setInfo] = useState([])
    const [addInfo, setAddInfo] = useState(false)
    const [addMoreInfo, setAddMoreInfo] = useState(false)

    function handleUsers(e) {
        e.preventDefault();
        fetch(`/allusers`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rescue_id: parseInt(rescue.id) }),
        })
        .then((r) => r.json())
        .then((ur) => { 
            setViewedUsers(ur)
            setClicked("users")
            }
            ) 
       }
    // if(viewedUsers.length > 0) {
    //     viewedUsers.map(v => console.log(v.user.name))
    // }
  function handleShowAdminInfo(e) {
    e.preventDefault();
    setShowingInfoForms(true)
    console.log(rescue)
  }
  function handleAddMoreQs(e) {
    e.preventDefault();
    setAddMoreQs(true)
  }
  function handleAddInfo(e) {
    e.preventDefault();
    setAddInfo(true)
  }
  function handleSubmitInfo(e){
    e.preventDefault();
    setAddInfo(false)
  }
  function handleAddMoreInfo(e){
    e.preventDefault();
    setAddMoreInfo(true)
    //want this to render an input form each time it's clicked
  }
  function handleChangeInfo(e){
    e.preventDefault();

  }
  function handleSaveInfo(e){
    e.preventDefault();
    setAddMoreInfo(false)
  }
return (
    <div>
    {/* <button onClick={handleShowAdminInfo}>Edit Rescue Information</button>
    <p>{rescue.name}, {rescue.location}</p><button>Update</button>
    <h3>information(title)</h3>
    <p>information(text)</p>
    <ul>question1<li>option1</li><li>option2</li></ul>
    <ul>question2<li>option1</li><li>option2</li></ul>
    <ul>question3<li>option1</li><li>option2</li></ul> */}
    {/* <button>edit</button> */}
    <button onClick={handleAddInfo}>Edit Info</button>
    {/* if clicked, set state and pull up a form. on submit, set state back to false. */}
    {addInfo ? <div>
       <form>
        Details:  
        <input 
        type="text" 
        id="rescuename" 
        placeholder="Name"></input>  
        <input 
        type="text" 
        id="rescuelocation" 
        placeholder="Location"></input>
        <br></br>
        Information: <input 
        type="text" 
        id="info" 
        placeholder="Title"></input>   
        <input 
        type="text" 
        id="info" 
        placeholder="Text"></input>     
    </form>
    <button onClick={handleAddMoreInfo}>Add More</button>
    {addMoreInfo ? <div>
        <form onChange={handleChangeInfo}>
            <input 
            type="text" 
            id="rescuelocation" 
            placeholder="Enter text"></input>
        </form> <button onClick={handleSaveInfo}>Save</button>
    </div> : null}
    <button onClick={handleSubmitInfo}>Submit</button> 
    </div>
    : null}
    {/* {setShowingInfoForms && info.length < 1 ? <div>Let's add some info</div> : null}
    {setShowingInfoForms && questions.length < 1 ? <div>Let's add some questions</div> : null} */}
    {/* {showingInfoForms ? <div>
        <form>
        <input 
        type="text" 
        id="rescuename" 
        placeholder={rescue.name}></input>  
         <input 
        type="text" 
        id="rescuelocation" 
        placeholder={rescue.location}></input> 
        </form>
        {/* {!rescue.information ? 
        <form>
            {numberOfQs.map(q => {
                <div>
                    <h3>Question{q.index}</h3>
                    <input 
                    type="text" 
                    id="question1" 
                    placeholder="Add text here">
                    </input> 
                    Correct Answer: <input 
                    type="text" 
                    id="question1" 
                    placeholder="Add text here">
                    </input> 
                    <br></br>
                    {numberOfOptions.map(o => {
                        <div>Incorrect Option{o.index}<input 
                        type="text" 
                        id="option1" 
                        placeholder="Add text here">
                        </input> </div>
                    })}
                </div>
            })} */}
        {/* <h3>Question 1</h3>
        Question: <input 
        type="text" 
        id="question1" 
        placeholder="Add text here">
        </input>  */}
        {/* Correct Answer: <input 
        type="text" 
        id="question1" 
        placeholder="Add text here">
        </input> 
        <br></br>
        Incorrect Option: <input 
        type="text" 
        id="question1" 
        placeholder="Add text here">
        </input>  */}
        {/* <br></br>
        <h3>Question 2</h3>
        Question: <input 
        type="text" 
        id="question2" 
        placeholder="Add text here"></input> 
        Correct Answer: <input 
        type="text" 
        id="question1" 
        placeholder="Add text here">
        </input> 
        <br></br>
        Incorrect Options: <input 
        type="text" 
        id="question1" 
        placeholder="Add text here">
        </input> 
        <br></br>
        <h3>Question 2</h3>
        Question: <input 
        type="text" 
        id="question3" 
        placeholder="Add text here"></input> 
        Correct Answer: <input 
        type="text" 
        id="question1" 
        placeholder="Add text here">
        </input> 
        <br></br>
        Incorrect Options: <input 
        type="text" 
        id="question1" 
        placeholder="Add text here">
        </input> 
        <br></br>
        <button onClick={handleAddMoreQs}>Add More Questions</button>
        {addMoreQs ? <input 
        type="text" 
        id="question2" 
        placeholder="Add text here"></input> : null}
        </form> : rescue.information.questions.map(q => {
            <div><input 
            type="text" 
            id={q.id} 
            placeholder={q.text}></input></div>
        }) } <button>Submit</button>
    </div> : null}  */} 
    <button>Edit Pets</button>
    <button onClick={handleUsers}>Edit Users</button>
    {clicked === "users" && viewedUsers.length > 0 ? viewedUsers.map(v => <div><p>{v.user.name}, {v.status}</p> 
    {v.status === "Admin" ? 
    <button onClick={(e) => handleRemoveAdmin(e, v)}>Remove Admin</button> :
    <button onClick={(e) => handleAddAdmin(e, v)}>Make Admin</button>  
    } </div>) 
   : null }
    </div>

)
}
export default Adminpage;