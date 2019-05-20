import vote from "../model/vote";


class VotePresenter {

    onQuestionVoteUp = (questionIndex) => {
        vote.addQuestionVote(questionIndex, true);
    }

    onQuestionVoteDown = (questionIndex) => {
        vote.addQuestionVote(questionIndex, false);
    }

    onAnswerVoteUp = (answerId) => {
        vote.addAnswerVote(answerId, true);
    }

    onAnswerVoteDown = (answerId) => {
        vote.addAnswerVote(answerId, false);
    }

}

const votePresenter = new VotePresenter();

export default votePresenter;