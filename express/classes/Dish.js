"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
class Dish {
    constructor(name = "", timeToEat = 1) {
        this.name = name;
        this.ingredients = [];
        this.timeToEat = timeToEat; // in seconds
    }
    /**
     *
     * @param ingredient string
     */
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
    /**
     *
     * @returns Array<string>
     */
    getIngredients() {
        return this.ingredients;
    }
    /**
     *
     * @returns string
     */
    getName() {
        return this.name;
    }
}
exports.Dish = Dish;
//# sourceMappingURL=Dish.js.map