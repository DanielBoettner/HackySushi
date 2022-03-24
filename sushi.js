class Seat {
    constructor(id){
        this.position = id;
        this.occupied = false;
        this.group = null;        
    }

    occupy (group = null) {
        this.occupied = true;
        this.group = group || new Date().getTime();
    }

    unoccupy () {
        this.occupied = false;
    }

    isAvailable () {
        return !this.occupied;
    }

}


/**
 * @class
 * @classdesc A group of seats.
 *
 */
class Sushibar {
    constructor(numSeats, menu = null) {
        let seats = [];
        for (let i = 0; i < numSeats; i++) {
            seats.push(new Seat(i));
        }

        this.seats = seats;
        this.menu = new Menu();
        this.orders = [];
    }

    takeOrder(seat, order) {
        this.orders.push({ seat, order });
    }

    serve() {
        this.orders.forEach(order => {
            const seat = this.seats[order.seat];
            const dish = this.menu[order.order];
            seat.eat(dish);
        });
    }

    printMenu() {
        console.log(this.menu);
    }

    printSeating() {
        console.log(this.seats);
    }

    /**
     * Find consecutive seats that are not occupied
     */
    findSeatsForGroup(numSeat) {
        let seats = [];
        
        seats = this.seats.filter(seat => {
            if(seat.isAvailable()) {
                let groupstart = seat.position;
                for(let i = 0; i < numSeat; i++) {
                    if(!this.seats[groupstart + i] || !this.seats[groupstart + i].isAvailable()) {
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

    /**
     * occupy consecutive seats
     *
     * @param {number} numSeats
     * @param {string} order
     * 
     * @returns {boolean} true if guests got seated
     */
    occupySeats(numSeats, order) {
        const group = new Date().getTime(),
            availableSeats = this.findSeatsForGroup(numSeats,group);
            
        console.log(`Found ${availableSeats.length} seats for ${numSeats} people`);
        for (let seat of availableSeats) {
            this.seats[seat.position].occupy(group);
        }
        return false;
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

const bar = new Sushibar(12);
//console.log(bar.printSeating());
console.log(bar.occupySeats(3));
console.log(bar.printSeating());