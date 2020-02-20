class GameScore {
    props;

    constructor(initialScore = 0) {
        this.props = {
            score: initialScore
        }
    }
    getCurrentScore = () => {
        return this.props.score;
    }
   updateScore = (newScore) => {
       this.props.score = newScore;
    }
}
