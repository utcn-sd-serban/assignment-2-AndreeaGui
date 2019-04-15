import React from "react";
import SmartQuestionsList from "./SmartQuestionsList";
import SmartCreateQuestion from "./SmartCreateQuestion";
import SmartQuestionDetails from "./SmartQuestionDetails";

const Router = ({route}) => (
    <div>
        {
            route === "question-tags" ? <SmartQuestionDetails/> :
            route === "create-question" ? <SmartCreateQuestion/> : <SmartQuestionsList/>
        }
    </div>
);

export default Router;