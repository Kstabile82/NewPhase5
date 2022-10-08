import React, { useState } from "react"; 
import Rescuepage from "./Rescuepage";

function AllRescues({ user, rescues, setRescues }) {
    const [rescue, setRescue] = useState({})

    function handleClick(e) {
        e.preventDefault();
      let num = parseInt(e.target.className);
      setRescue(rescues.find(r => r.id === num))
}

    return (
        <div className="container">
            {rescues.map(r => <p className={r.id} onClick={handleClick}>{r.name}, {r.location}</p>)}
           <p>Find a Rescue</p>
           {rescue !== {} ? <Rescuepage user={user} rescue={rescue}/> : null }
           <div className="filter">Filter:
            {/* <form onSubmit={handleSubmitFilter}>
                <select name="difficulty" id="difficulty" onChange={handleFilterChange}>
                <option key="" value="" hidden>Difficulty</option>
                <option key="advanced" value="Advanced" >Advanced</option>
                <option key="beginner" value="Beginner" >Beginner</option>
                <option key="intermediate" value="Intermediate" >Intermediate</option>
                <option key="all" value="All" >All</option>
                </select>
                <b> </b> */}
            {/* </form>  */}
            </div>
            </div>
    );
}

export default AllRescues;