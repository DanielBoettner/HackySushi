import { Dish } from "./Dish";

export class Menu {
    public name: string;
    public dishes: Array<Dish>;

    constructor(name: string = "Sushibar Menu") {
        this.dishes = [
            new Dish("Veggy Sushi", 10),
            new Dish("Fish Sushi", 5),
            new Dish("Shrimp Sushi", 8),
            new Dish("Salad", 3),
        ];

        this.name = name;
    }

    /**
     * 
     * @param dish Dish
     */
    addDish(dish: Dish) {
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