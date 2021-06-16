let renderer = {
    map: "",
    render(i) {
        this.map = config[i].text;
        this.map += '?';
        this.map += '\n';

        const lets = ["a", "b", "c", "d"];

        for (let j = 0; j < config[i].answers.length; j++) {
            this.map += lets[j];
            this.map += ') ';
            this.map += config[i].answers[j];
            this.map += '\n';
        }

        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = "";
    }
};

