
import {EventEmitter} from "events";

class Question extends EventEmitter{
    constructor(){
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
            
        };
    }
    

    addQuestion(userId, title, text, tags){
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

    changeNewQuestionProperty(property, value){
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]:value
            }

        };

        //funtion of the EventEmitter class; 1st is the event and 2nd a prameter
        this.emit("change", this.state);
    }
}

const question = new Question();

export default question;