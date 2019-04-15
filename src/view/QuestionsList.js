
import React from "react";

const QuestionsList = ({questions, onCreateQuestion, onViewTags, onFilterByTag, onFilterByTitle}) => (
    <div>
        <h2>Questions</h2>
        <br/> <br/> 
        <label>Search: </label>
            <input //value={search} onSearch={ e =>onSearch("userId",e.target.value)}
            />
        <br />
        <button onClick = {onFilterByTag}>Filter questions by tag</button>
        <br/> 
        <button onClick = {onFilterByTitle}>Filter questions by title</button>
        <br/> <br/> 
        <table border = "1">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Title</th>
                    <th>Text</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                questions.map((question, index) => (
                    <tr key = {index}>
                        <td>{ question.userId }</td>
                        <td>{ question.title }</td>
                        <td>{ question.text }</td>
                        <td>
                            <button onClick ={() => onViewTags(index)}>
                                View tags
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        <br/>
        <button onClick = {onCreateQuestion}>Add new question</button>
        
        
    </div>
);

export default QuestionsList;