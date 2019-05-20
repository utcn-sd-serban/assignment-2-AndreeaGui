import question from "../model/question";


class QuestionsListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewTags(index) {
        window.location.assign("#/question-details/" + index);
    }

    onSearch(searchWord) {
        question.changeSearch(searchWord);

    }

    onFilterByTag() {
        question.filterByTag();
        window.location.assign("#/filter-by-tag/" + question.state.search);
        question.changeSearch("");//the search is reset to empty
    }

    onFilterByTitle() {
        question.filterByTitle(question.state.search);
        window.location.assign("#/filter-by-title/" + question.state.search);
        question.changeSearch("");
    }

}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;