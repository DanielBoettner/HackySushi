import { Seat } from "./Seats";

export class Table {
    public id: number;
    private static _nextId: number = 0;
    public seats: Array<Seat> = [];

    constructor(
        numSeats: number = Number(process.env.DEFAULT_SEATS) || 10
    ) {
        this.id = this.getNextId();
        for (let i = 0; i < numSeats; i++) {
            let seat = new Seat(this.id, i);
            this.addSeat(seat);
        }
    }

    public getNextId(): number {
        return Table._nextId++;
    }

    public get seatsCount(): number {
        return this.seats.length;
    }

    public getSeats(): Seat[] {
        return this.seats;
    }

    public addSeat(seat: Seat): void {
        this.seats.push(seat);
    }

}