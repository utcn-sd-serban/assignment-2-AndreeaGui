
import { EventEmitter } from "events";

class Question extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                userId: "1",
                title: "Hello",
                text: "something funny",
                tags: []
            }, {
                userId: "1",
                title: "Goodbye",
                text: "something sad",
                tags: ["a", "b", "c"]
            }, {
                userId: "2",
                title: "Hola",
                text: "something amazing and exciting",
                tags: ["c", "d"]
            }],
            //object used to fill the values from the input
            newQuestion: {
                userId: "",
                title: "",
                text: "",
                tags: []
            },
            search: "",
            filteredQuestions: []
        };
    }


    addQuestion(userId, title, text, tags) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat(
                [{
                    userId: userId,
                    title: title,
                    text: text,
                    tags: tags
                }]
            )

        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }

        };

        this.emit("change", this.state);
    }

    changeSearch(newSearch) {
        this.state = {
            ...this.state,
            search: newSearch

        };

        this.emit("change", this.state);
    }

    filterByTitle(filterTitle) {

        let filteredQuestions = this.state.questions.filter(
            question => question.title.includes(filterTitle));
        this.state = {
            ...this.state,
            filteredQuestions: filteredQuestions

        };

    }

    filterByTag() {
        //TBA
    }
}

const question = new Question();

export default question;