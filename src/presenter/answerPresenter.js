import answer from "../model/answer";


class AnswerPresenter {

    onCreate() {
        answer.addAnswer(answer.state.newAnswer.userId,
            answer.state.newAnswer.questionId,
            answer.state.newAnswer.text);
        answer.changeNewAnswerProperty("answerId", "");
        answer.changeNewAnswerProperty("userId", "");
        answer.changeNewAnswerProperty("questionId", "");
        answer.changeNewAnswerProperty("text", "");

    }

    onChange(property, value) {
        answer.changeNewAnswerProperty(property, value);
    }
    onAddAnswer() {
        window.location.assign("#/create-answer");
    }

    onDelete = (answerId) => {
        answer.deleteAnswer(answerId);

    }

    onUpdate = (answerId) => {
        answer.updateAnswer(answerId);
    }



}

const answerPresenter = new AnswerPresenter();

export default answerPresenter;