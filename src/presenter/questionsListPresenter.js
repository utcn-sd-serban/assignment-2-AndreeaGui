


class QuestionsListPresenter{
    onCreateQuestion(){
        window.location.assign("#/create-question");
    }

    onViewTags(index){
        window.location.assign("#/question-details/" + index);
    }

    onFilterByTag(){
        window.location.assign("#/filter-by-tag");
    }

    onFilterByTitle(){
        window.location.assign("#/filter-by-title");
    }
    
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;