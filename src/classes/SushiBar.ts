import { table } from "console";
import { Menu } from "./Menu";
import { Seat } from "./Seats";
import { Table } from "./Tables";

type tableSetup = {
    numSeats: number,
}
/**
 * @class
 * 
 * @classdesc A group of seats.
 *
 */
export class SushiBar {
    public menu: Menu;
    private _tables: Array<Table> = [];

    /**
     * 
     * @param numTables number of tables or null for default
     * @param numSeats number of seats per table or null for default
     * @param menu a menu instance
     */
    constructor(
        tableSetups: Array<tableSetup> = [{numSeats: 15}]
    ) {
        let tables = [];
        for (const tableSetup of tableSetups) {
            const newTable = new Table(tableSetup.numSeats);            
            tables.push(newTable);
        }

        debugger;
        this._tables = tables;
        this.menu = new Menu();
    }

    printMenu() {
        console.log(this.menu);
    }

    printSeating() {
        return JSON.stringify(this.tables); 
    }

    public get tables() {
        return this._tables;
    }

    /**
        * occupy consecutive seats
        *
        * @param {number} guests
        * 
        * @returns {object} true if guests got seated
        */
    public seatGroup(guests: number): object {
        const group = new Date().getTime(),
            availableSeats = this.findSeatsForGroup(guests, group);
        
        let response = {
            group: group,
            table: null,
            isSeated: false,
            seats: Array(),
            message: '',
        }

        if(guests <= 0) {
            response.message = 'No guests to seat';
            return response;
        } 

        console.log(`Found ${availableSeats.length} seats for ${guests} people`);
        // for numSeats occupy seats
        for (let i = 0; i < guests; i++) {
            let seat = availableSeats.shift();
            seat ? seat.occupy(group) : console.log(`No seats available`);
            response.seats.push(seat?.position);
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
    findSeatsForGroup(numSeat: number, group: number): Array<Seat> {
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