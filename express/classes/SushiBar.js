"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiBar = void 0;
const Menu_1 = require("./Menu");
const Tables_1 = require("./Tables");
/**
 * @class
 * @classdesc A group of seats.
 *
 */
class SushiBar {
    /**
     *
     * @param numTables number of tables or null for default
     * @param numSeats number of seats per table or null for default
     * @param menu a menu instance
     */
    constructor(tableSetups = [{ numSeats: 15 }]) {
        this._tables = [];
        let tables = [];
        for (const tableSetup of tableSetups) {
            const newTable = new Tables_1.Table(tableSetup.numSeats);
            tables.push(newTable);
        }
        debugger;
        this._tables = tables;
        this.menu = new Menu_1.Menu();
    }
    printMenu() {
        console.log(this.menu);
    }
    printSeating() {
        return JSON.stringify(this.tables);
    }
    get tables() {
        return this._tables;
    }
    /**
        * occupy consecutive seats
        *
        * @param {number} guests
        *
        * @returns {object} true if guests got seated
        */
    seatGroup(guests) {
        const group = new Date().getTime(), availableSeats = this.findSeatsForGroup(guests, group);
        let response = {
            group: group,
            table: null,
            isSeated: false,
            seats: Array(),
            message: '',
        };
        if (guests <= 0) {
            response.message = 'No guests to seat';
            return response;
        }
        console.log(`Found ${availableSeats.length} seats for ${guests} people`);
        // for numSeats occupy seats
        for (let i = 0; i < guests; i++) {
            let seat = availableSeats.shift();
            seat ? seat.occupy(group) : console.log(`No seats available`);
            response.seats.push(seat === null || seat === void 0 ? void 0 : seat.position);
        }
        response.isSeated = response.seats.length === guests;
        response.isSeated ? console.log(`Seated ${guests} people`) : console.log(`Could not seat ${guests} people`);
        if (response.isSeated) {
            response.table = response.seats[0].table.id;
            response.seats = response.seats.concat(response.seats.map(seat => seat.position));
            response.message = `Seated ${guests} people`;
        }
        return response;
    }
    /**
     * Find consecutive seats that are not occupied
     */
    findSeatsForGroup(numSeat, group) {
        let seats = [];
        for (let dinnertable of this.tables) {
            for (let seat of dinnertable.seats) {
                if (seat.group === null && !seat.occupied) {
                    seats.push(seat);
                }
            }
        }
        console.log(`Found ${seats.length} available seats`);
        console.log(seats);
        return seats;
    }
}
exports.SushiBar = SushiBar;
//# sourceMappingURL=SushiBar.js.map