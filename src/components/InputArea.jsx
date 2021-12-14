import React from "react";

function InputArea(props){
    const [note, setNote] = React.useState({
        title: "",
        content:""
    });
    function handleTextChange(event)
    {
        const {name, value} = event.target;
        // console.log(name);
        // console.log([name]);
        setNote((preNote) => {
            return {
                ...preNote,
                [name]: value
            };
        });
    }

    return(
        <div>
            <input onChange={handleTextChange} value={note.title} type="text" name="title" placeholder="Title"/>
            <textarea onChange={handleTextChange} value={note.content} type="text" name="content" placeholder="Content..."/>
            <button onClick={()=>{
                props.onAdd(note);
            }}>Add</button>
        </div>
    );
}


export default InputArea;