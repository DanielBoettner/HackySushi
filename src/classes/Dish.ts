export class Dish {
    public name: string;
    public timeToEat: number;
    public ingredients: Array<string>;

    constructor(name: string = "", timeToEat = 1) {
        this.name = name;
        this.ingredients = [];
        this.timeToEat = timeToEat; // in seconds
    }

    /**
     * 
     * @param ingredient string
     */
    addIngredient(ingredient: string) {
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