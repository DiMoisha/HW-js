const player = {
    score: 0,
    answer: 0,
    pushScore(score) {
        this.score += score;
        this.answer++;
    }
};