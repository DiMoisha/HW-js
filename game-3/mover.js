let mover = {
    getDirection() {
        const availableDirections = ["a", "b", "c", "d"];

        while(true) {
            let cDirection = prompt("Ведите ответ - a, b, c или d. 'Отмена' для выхода");

            if (cDirection === "Отмена") {
                return null;
            }

            if (!availableDirections.includes(cDirection)) {
                alert("Принимаются только - a, b, c или d.");
                continue;
            } else {
                let direction = 0;

                switch(cDirection){
                    case "b":
                        direction = 1;
                        break;
                        
                    case "c":
                        direction = 2;
                        break;
                        
                    case "d":
                        direction = 3;
                        break;
                }

                return direction;
            }
        }        
    }
};