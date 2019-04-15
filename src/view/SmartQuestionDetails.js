import React, {Component} from "react";
import QuestionDetails from "./QuestionDetails";
import question from "../model/question";


const mapModelStateToComponentState = (modelState, props) => (
    modelState.questions[props.match.params.index]
   
);

export default class SmartQuestionDetails extends Component{
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

    componentDidUpdate(prev){
        if(prev.match.params.index !== this.props.match.params.index){
            this.setState(mapModelStateToComponentState(question.state, this.props));
        }
    }

    //the render method - shows the things
    render(){
        return (
            <QuestionDetails
                userId = {this.state.userId}
                title = {this.state.title}
                text = {this.state.text}
                tags = {this.state.tags}
                index = {this.props.match.params.index}/>
        );    
    }
}