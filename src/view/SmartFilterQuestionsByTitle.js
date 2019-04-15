import React, {Component} from "react";
import question from "../model/question";
import FilterQuestionsByTitle from "./FilterQuestionsByTitle";


const mapModelStateToComponentState = (modelState, props) => (
    modelState.questions[props.match.params.index]
   
);

export default class SmartFilterQuestionsByTitle extends Component{
    constructor(props){
        super(props);
        this.state = mapModelStateToComponentState(question.state, props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, props));
        question.addListener("change", this.listener);
    }

    componentWillUnmount(){
        question.removeListener("change", this.listener);
        //prevent memory leacks
    }


    //the render method - shows the things
    render(){
        return (
            <FilterQuestionsByTitle/>
        );    
    }
}