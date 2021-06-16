function Question(text, score, answer, answers = [,]) {
    this.text = text,
    this.score = score,
    this.answer = answer,
    this.answers = answers.slice()

    this.answers.push(this.answer)
    this.answers.sort()
};