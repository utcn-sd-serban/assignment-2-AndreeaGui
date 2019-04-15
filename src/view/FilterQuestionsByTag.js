
import React from "react";


const FilterQuestionsByTag = ({questions, onViewTags}) => (
    <div>
        <h2>Filtered questions by tag</h2>
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
        
        
    </div>
);

export default FilterQuestionsByTag;