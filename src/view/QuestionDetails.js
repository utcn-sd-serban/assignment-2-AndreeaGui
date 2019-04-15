import React from "react"

const SudentDetails = ({ userId, title, text, tags, index }) => (
    <div>
        <h2>Question {index}</h2>
        <label>User: </label>
        <span>{userId}</span>
        <br/>
        <label>Title: </label>
        <span>{title}</span>
        <br/>
        <label>Text: </label>
        <span>{text}</span>
        <br/>
        <ul>{
            tags.map((tag, index) => (
                <li key = {index}>
                    {tag}
                </li>
            ))}
        </ul>
    </div>
);

export default SudentDetails;