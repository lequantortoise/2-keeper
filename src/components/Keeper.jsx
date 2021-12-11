import React from "react";

function Keeper(props){
    return(
        <div className="note">
            <h1>{props.keeperTitle}</h1>
            <p>{props.keeperContent}</p>
        </div>
    );
}

export default Keeper;