
import { EventEmitter } from "events";

class Answer extends EventEmitter {
    constructor() {
        super();
        this.state = {
            answers: [{
                answerId: 0,
                userId: "1",
                questionId: 1,
                text: "and perfect",
            }, {
                answerId: 1,
                userId: "3",
                questionId: 2,
                text: "and boring",
            }, {
                answerId: 2,
                userId: "1",
                questionId: 0,
                text: "and new.",
            }],

            currentId: 2,

            //object used to fill the values from the input
            newAnswer: {
                answerId: "",
                userId: "",
                questionId: "",
                text: "",
            },

        };
    }


    addAnswer(userId, questionId, text) {
        this.state = {
            ...this.state,
            currentId: ++this.state.currentId,
            answers: this.state.answers.concat(
                [{
                    answerId: this.state.currentId,
                    userId: userId,
                    questionId: parseInt(questionId),
                    text: text
                }]
            )

        };
        this.emit("change", this.state);
    }

    changeNewAnswerProperty(property, value) {
        this.state = {
            ...this.state,
            newAnswer: {
                ...this.state.newAnswer,
                [property]: value
            }

        };

        this.emit("change", this.state);
    }

    deleteAnswer(answerId) {
        let answers = this.state.answers;
        for (let i = 0; i < answers.length; i++) {
            if (answerId === answers[i].answerId) {
                answers.splice(i, 1);
            }
        };
        this.state = {
            ...this.state,
            answers: answers
        };

        this.emit("change", this.state);
    }

    updateAnswer(answerId) {
        debugger;
        let answers = this.state.answers;
        for (let i = 0; i < answers.length; i++) {
            if (answerId === answers[i].answerId) {
                //answers[i].text = newAnswerText;
                answers[i].text = "newAnswerText";
            }
        }
        this.state = {
            ...this.state,
            answers: answers
        };
        this.emit("change", this.state);
    }

    listAnswersByQuestion(questionId) {
        let intId = parseInt(questionId);
        return this.state.answers.filter(answer => answer.questionId === intId);
    }

}

const answer = new Answer();

export default answer;