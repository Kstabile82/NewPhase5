import React, { useState } from "react"; 
import Rescuepage from "./Rescuepage";

function AllRescues({ updateUserRescues, user, rescues, setRescue, rescue, isAdmin, setIsAdmin }) {
    let displayedRescueIDs = []
    let displayedRescues = []
    setIsAdmin(false)
    //setUserRescue({})

    if (user && user.userrescues.length > 0) {
        user.userrescues.map(ur => {
        displayedRescueIDs.push(ur.rescue.id)
        })
    }
    if (displayedRescueIDs.length > 0) {
             rescues.map(r => {
            if (!displayedRescueIDs.includes(r.id)){
                displayedRescues.push(r)           
         }
        })
    }
    function handleClick(e) {
      e.preventDefault();
      let num = parseInt(e.target.className);
      setRescue(rescues.find(r => r.id === num))
    }
    function handleSaveToMyRescues(e, rescue) {
        updateUserRescues(rescue, e)
    }

    function handleFilterChange() {

    }
    function handleSubmitFilter(){

    }
    return (
        <div className="container">
            {displayedRescues.map(r => <p className={r.id} onClick={handleClick}>{r.name}, {r.location}</p>)}
           {rescue ? <div>
            <Rescuepage isAdmin={isAdmin} setIsAdmin={setIsAdmin} user={user} rescue={rescue}/> 
            <button onClick={(e) => handleSaveToMyRescues(e, rescue)}>Save to My Rescues</button> </div> : null }
           <p>Search</p>
           <div className="filter">Filter:
            <form onSubmit={handleSubmitFilter}>
                <select name="location" id="location" onChange={handleFilterChange}>
                <option key="" value="" hidden>Location</option>
                <option key="NY" value="NY" >NY</option>
                <option key="NJ" value="NJ" >NJ</option>
                <option key="CA" value="CA" >CA</option>
                <option key="all" value="All" >All</option>
                </select>
                <b> </b> 
             </form> 
            </div>
            </div>
    );
}

export default AllRescues;