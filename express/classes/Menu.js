"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const Dish_1 = require("./Dish");
class Menu {
    constructor(name = "Sushibar Menu") {
        this.dishes = [
            new Dish_1.Dish("Veggy Sushi", 10),
            new Dish_1.Dish("Fish Sushi", 5),
            new Dish_1.Dish("Shrimp Sushi", 8),
            new Dish_1.Dish("Salad", 3),
        ];
        this.name = name;
    }
    /**
     *
     * @param dish Dish
     */
    addDish(dish) {
        this.dishes.push(dish);
    }
    /**
     *
     * @returns Array<Dish>
     */
    getDishes() {
        return this.dishes;
    }
    /**
     *
     * @returns string
     */
    getName() {
        return this.name;
    }
}
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map