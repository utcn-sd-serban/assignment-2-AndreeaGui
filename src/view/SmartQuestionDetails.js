import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import question from "../model/question";
import answer from "../model/answer";
import vote from "../model/vote";
import answerPresenter from "../presenter/answerPresenter";
import votePresenter from "../presenter/votePresenter";

const mapModelState = (questionModelState, voteModelState, answerModelState, props) => ({
    question: questionModelState.questions[props.match.params.index],
    answer: answerModelState.answers,
    questionVote: voteModelState.questionVotes,
    answerVote: voteModelState.answerVotes
});

export default class SmartQuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelState(question.state, vote.state, answer.state, this.props);

        this.listener = () => this.setState(mapModelState(question.state, vote.state, answer.state, this.props));
        question.addListener("change", this.listener);
        answer.addListener("change", this.listener);
        vote.addListener("change", this.listener);
    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
        answer.removeListener("change", this.listener);
        vote.removeListener("change", this.listener);

    }

    componentDidUpdate(prev) {
        if (prev.match.params.index !== this.props.match.params.index) {
            this.setState(mapModelState(question.state, vote.state, answer.state, this.props));
        }
    }

    //the render method - shows the things
    render() {
        debugger;
        return (
            <QuestionDetails
                userId={this.state.question.userId}
                title={this.state.question.title}
                text={this.state.question.text}
                tags={this.state.question.tags}
                questionIndex={this.props.match.params.index}
                answers={answer.listAnswersByQuestion(this.props.match.params.index)}
                onDelete={answerPresenter.onDelete}
                onUpdate={answerPresenter.onUpdate}
                onAddAnswer={answerPresenter.onAddAnswer}
                onAnswerVoteDown={votePresenter.onAnswerVoteDown}
                onAnswerVoteUp={votePresenter.onAnswerVoteUp}
                onQuestionVoteDown={votePresenter.onQuestionVoteDown}
                onQuestionVoteUp={votePresenter.onQuestionVoteUp}

            />
        );
    }
}