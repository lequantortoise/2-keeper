import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import InputArea from "./InputArea";

function App(){

    const [arrNotes, setArrNotes] = React.useState([]);
    function addNote(note){
        setArrNotes((preArrNotes)=>{
            return [...preArrNotes, note];
        });
    }

    function deleteNote(id){
        setArrNotes((preArrNotes)=>{
            return preArrNotes.filter((atDelNote, index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header/>
            <InputArea 
                onAdd={addNote}    
            />
            {arrNotes.map((noteItem, index)=>{
                return(<Note
                    key={index}
                    id={index}
                    onDeletedItem={deleteNote}
                    title= {noteItem.title}
                    content= {noteItem.content}
                />)
            })}
            <Footer/>
        </div>
    );
}

export default App;