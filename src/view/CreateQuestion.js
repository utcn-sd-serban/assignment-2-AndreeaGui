
import React from "react";

const CreateQuestion = ({onCreate, onChange, newUserId, newTitle, newText, newTags}) => (
    <div>
        <h2>Add question</h2>
        <div>
            <label>User ID: </label>
            <input value={newUserId} onChange={ e =>onChange("userId",e.target.value)}/>
            <br />
            <label>Title: </label>
            <input value={newTitle} onChange = { e => onChange("title", e.target.value)}/>
            <br />
            <label>Text: </label>
            <input value={newText} onChange = { e => onChange("text", e.target.value)}/>
            <br />
            <label>Tags: </label>
            <input value={newTags} onChange = { e => onChange("tags", e.target.value)}/>
            <br />
            <br/>
            <button onClick = {onCreate}>Add Question!</button>
            <hr></hr>
        </div>
    </div>
);

export default CreateQuestion;