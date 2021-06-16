let mover = {
    getDirection() {
        // Инициализируем новый массив перемещений
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

        while(true) {
            let direction = parseInt(prompt("Ведите число (2,4,6,8 - вниз,влево,вправо,вверх | 1,3,7,9 - по диагонали), куда вы хотите переместиться. 'Отмена' для выхода"));

            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("Для перемещения необходимо ввести одно из чисел от 1 до 9, кроме 5");
                continue;
            }

            return direction;
        }        
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };

        const prevPosition = {
            x: player.x,
            y: player.y
        };

        switch(direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;

            // Диагонали

            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;

        }

        // Проверка на упор в стенку по разным осям координат
        // Принцип такой, что если ход по диагонали и точка по одной из координат выходит за пределы поля, 
        // то по этой координате точка перемещается на предыдущую позицию - как бы скользит по границе поля
        if (nextPosition.x < 0 || nextPosition.x >= config.colsCount) {
            nextPosition.x = prevPosition.x;
        }

        if (nextPosition.y < 0 || nextPosition.y >= config.rowsCount) {
            nextPosition.y = prevPosition.y;
        }

        return nextPosition;
    }
};