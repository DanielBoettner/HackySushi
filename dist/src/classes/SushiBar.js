import { Seat } from "./Seat";
import { Menu } from "./menu";
/**
 * @class
 * @classdesc A group of seats.
 *
 */
export class SushiBar {
    constructor(numSeats, menu = null) {
        let seats = [];
        for (let i = 0; i < numSeats; i++) {
            seats.push(new Seat(i));
        }
        this.seats = seats;
        this.menu = menu || new Menu();
        this.orders = [];
    }
    takeOrder(seat, order) {
        this.orders.push({ seat, order });
    }
    printMenu() {
        console.log(this.menu);
    }
    printSeating() {
        console.log(this.seats);
    }
    /**
        * occupy consecutive seats
        *
        * @param {number} numSeats
        *
        * @returns {boolean} true if guests got seated
        */
    occupySeats(numSeats) {
        const group = new Date().getTime(), availableSeats = this.findSeatsForGroup(numSeats, group);
        console.log(`Found ${availableSeats.length} seats for ${numSeats} people`);
        // for numSeats occupy seats
        for (let i = 0; i < numSeats; i++) {
            let seat = availableSeats.shift();
            seat ? seat.occupy(group) : console.log(`No seats available`);
        }
        return this.seats.filter(seat => seat.group === group);
    }
    /**
     * Find consecutive seats that are not occupied
     */
    findSeatsForGroup(numSeat, group) {
        let seats = [];
        seats = this.seats.filter(seat => {
            if (seat.isAvailable()) {
                let groupstart = seat.position;
                for (let i = 0; i < numSeat; i++) {
                    if (!this.seats[groupstart + i] || !this.seats[groupstart + i].isAvailable()) {
                        return false;
                    }
                }
                return true;
            }
        });
        console.log(`Found ${seats.length} available seats`);
        console.log(seats);
        return seats;
    }
    handleGuests(guests = 1) {
        const seats = this.occupySeats(guests);
        if (seats.length === guests) {
            for (let seat of seats) {
                //this.seats[seat].or
            }
        }
        return false;
    }
}
//# sourceMappingURL=SushiBar.js.map