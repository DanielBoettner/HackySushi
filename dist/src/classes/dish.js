export class Dish {
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
//# sourceMappingURL=dish.js.map