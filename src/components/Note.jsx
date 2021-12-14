import React from "react";
// import Keeper from "./Keeper";
// import keepers from "../keeper";

function Note(props){
    return(
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>{props.onDeletedItem(props.id)}}>DELETE</button>
        </div>
    );
}

export default Note;