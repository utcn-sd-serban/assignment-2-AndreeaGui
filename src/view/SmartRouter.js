import React, {Component} from "react";
import Router from "./Router";
import question from "../model/question";


const mapModelStateToComponentState = modelState => ({
    route: modelState.route
   
});

export default class SmartRouter extends Component{
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
            <Router
                router = {this.state.route} />
        );    
    }
}