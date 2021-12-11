import React from "react";
import Keeper from "./Keeper";
import keepers from "../keeper";

function Note(){
    return(
        <div>
            <dl >
                {keepers.map(keeper=>(
                    <Keeper
                        key = {keeper.key}
                        keeperTitle = {keeper.title}
                        keeperContent = {keeper.content}
                    />
                ))}
            </dl>
        </div>
    );
}

export default Note;