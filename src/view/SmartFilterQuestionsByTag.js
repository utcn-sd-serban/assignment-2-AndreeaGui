import React, {Component} from "react";
import question from "../model/question";
import questionsListPresenter from "../presenter/questionsListPresenter";
import FilterQuestionsByTag from "./FilterQuestionsByTag";



const mapModelStateToComponentState = modelState => ({
    questions: modelState.questions,
   
});

export default class SmartFilterQuestionsByTag extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(question.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        question.addListener("change", this.listener);
    }

    componentWillUnmount(){
        question.removeListener("change", this.listener);
        //prevent memory leacks
    }

    //the render method - shows the things
    render(){
        return (
            <FilterQuestionsByTag 
                onViewTags={questionsListPresenter.onViewTags}
                onCreateQuestion={questionsListPresenter.onCreateQuestion}
                onFilterByTag = {questionsListPresenter.onFilterByTag}
                onFilterByTitle = {questionsListPresenter.onFilterByTitle}
                questions = {this.state.questions} />
        );    
    }
}