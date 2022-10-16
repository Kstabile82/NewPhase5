import React, { useEffect, useState } from "react";
import Questions from "./Questions";

function Adminpage({ user, rescue, handleRemoveAdmin, handleAddAdmin }) {
    const [viewedUsers, setViewedUsers] = useState([])
    const [clicked, setClicked] = useState("")
    const [showingInfoForms, setShowingInfoForms] = useState(false)
    const [addMoreQs, setAddMoreQs] = useState(false)
    const [editQs, setEditQs] = useState(false)
    const [questions, setQuestions] = useState([])
    const [info, setInfo] = useState([])
    const [addInfo, setAddInfo] = useState(false)
    const [addMoreInfo, setAddMoreInfo] = useState(false)
    const [i, setI] = useState({})
    let title; 
    let text;
    let updatedInfo = {}
    useEffect(() => {
        fetch("/information", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rescue_id: parseInt(rescue.id) }),
        })
        .then((r) => r.json())
        .then((inf) => { 
            setInfo(inf)
            }
            ) 
        },[]);
    
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
  function handleShowAdminInfo(e) {
    e.preventDefault();
    setShowingInfoForms(true)
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
  }
  function handleChangeInfo(e){
    e.preventDefault();
    if (e.target.placeholder === "Title") {
        title = e.target.value;
    }
    if (e.target.placeholder === "Enter text") {
        text = e.target.value
    }
  }
  function handleSaveInfo(e){
    e.preventDefault();
    setAddMoreInfo(false)
    fetch(`/newinformation`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ rescue_id: rescue.id, title, text }),
    })
    .then((r) => r.json())
    .then((newInfo) => {
        setInfo([...info, newInfo])
    })
   }
   function handleDeleteInfo(e, i) {
    fetch(`/information/${i.id}`, { 
        method: 'DELETE'
    })
    setInfo(info.filter(inf => inf.id !== i.id))   }
    
    function handleEditQs(e, i) {
        setEditQs(true)
        setI(i)
    }
    function handleSaveInfoChanges(e, i) {
        console.log(i)
        //want the save click to save ONLY what's in that input box
        fetch(`/information/${i.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ i }),
        })
        .then((r) => r.json())
        // .then((updatedI) => console.log(info))
        .then((updatedI) => setInfo([...info.filter(inf => inf.id !== updatedI.id), updatedI]))
    }
    function handleInfoChange(e, i) {
        updatedInfo = i 
        if (e.target.id === "title") {
            i.title = e.target.value;
        }
        if (e.target.id === "text") {
            i.text = e.target.value
        }    
    }
return (
    <div>
    {!addInfo ? <button onClick={handleAddInfo}>Edit Info</button> : null }
    {/* <button style={{display: !addInfo ? 'visible' : 'none' }} onClick={handleAddInfo}>Edit Info</button> */}
    {addInfo ? <div>
       <form>
        Details:  
        <input 
        type="text" 
        id="rescuename" 
        defaultValue={rescue.name}></input>  
        <input 
        type="text" 
        id="rescuelocation" 
        defaultValue={rescue.location}></input>
        <br></br>  
    </form>
    <button>Save</button>
    {addInfo && info.length > 0 ? info.map(i => <div>
            <form onChange={(e) => handleInfoChange(e, i)}>
            Title: <input 
                type="text" 
                id="title" 
                placeholder={i.title}
                defaultValue={i.title}>
            </input><br></br>
            Text: <input 
                type="text" 
                id="text" 
                placeholder={i.text}
                defaultValue={i.text}>
            </input> 
            </form>
            <button onClick={(e) => handleDeleteInfo(e, i)}>Delete</button><button onClick={(e) => handleSaveInfoChanges(e, i)}>Save</button><button onClick={(e) => handleEditQs(e, i)}>Edit Questions</button><br></br>
        </div> ): null} 
        {editQs && i !== {} ? <Questions i={i} /> : null }

    <button onClick={handleAddMoreInfo}>Add Information</button>
    {addMoreInfo ? <div>
        <form onChange={handleChangeInfo}>
            <input 
            type="text" 
            id="rescuelocation" 
            placeholder="Title"></input>
            <input 
            type="text" 
            id="rescuelocation" 
            placeholder="Enter text"></input>
        </form> 
        <button onClick={handleSaveInfo}>Save</button>
    </div> : null}
    <button onClick={handleSubmitInfo}>Submit</button> 
    </div>
    : null}
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