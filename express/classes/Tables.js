"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const Seats_1 = require("./Seats");
class Table {
    constructor(numSeats = Number(process.env.DEFAULT_SEATS) || 10) {
        this.seats = [];
        this.id = this.getNextId();
        for (let i = 0; i < numSeats; i++) {
            let seat = new Seats_1.Seat(this.id, i);
            this.addSeat(seat);
        }
    }
    getNextId() {
        return Table._nextId++;
    }
    get seatsCount() {
        return this.seats.length;
    }
    getSeats() {
        return this.seats;
    }
    addSeat(seat) {
        this.seats.push(seat);
    }
}
exports.Table = Table;
Table._nextId = 0;
//# sourceMappingURL=Tables.js.map