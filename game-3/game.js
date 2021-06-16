let game = {
    run() {
        for (let i = 0; i < config.length; i++) {
            const scor = config[i].score;
            const answr = config[i].answers.indexOf(config[i].answer);

            renderer.clear();
            renderer.render(i);

            const direction = mover.getDirection();
            if (direction === null) {
                break;
            }

            if (direction === answr) {
                player.pushScore(scor);
            }
        }

        renderer.clear();
        console.log(`Игра окончена. Вы ответили на ${player.answer} вопросов и набрали ${player.score} очков`);
    },
    init() {
        console.log("Игра 'Кто хочет стать миллиардером!!!'");
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter");
    }
};

game.init();