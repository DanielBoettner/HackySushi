"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seat = void 0;
class Seat {
    constructor(tableId, id, options = null) {
        this._table = tableId;
        this._position = id;
        this._occupied = false;
        this._group = (options === null || options === void 0 ? void 0 : options.group) || null;
    }
    /**
     * @returns boolean
     */
    get occupied() {
        return this._occupied;
    }
    /**
     *
     */
    set occupied(value) {
        this._occupied = value;
    }
    /**
     * @returns number
     */
    get group() {
        return this._group;
    }
    /**
     * @param seat Seat
     */
    set group(value) {
        this._group = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    /**
     *
     * @param group number
     */
    occupy(group) {
        this._occupied = true;
        this._group = group || new Date().getTime();
    }
    unoccupy() {
        this._occupied = false;
    }
    isAvailable() {
        return !this._occupied;
    }
}
exports.Seat = Seat;
//# sourceMappingURL=Seats.js.map