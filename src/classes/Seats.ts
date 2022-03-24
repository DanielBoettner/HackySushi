export class Seat {
    private _table: number;
    private _position: number;
    private _group: number | null;
    private _occupied: boolean;

    constructor(
        tableId: number,
        id: number,
        options: { [key: string]: any } | null = null
    ) {
        this._table = tableId;
        this._position = id;
        this._occupied = false;
        this._group = options?.group || null;
    }

    /**
     * @returns boolean
     */
    public get occupied(): boolean {
        return this._occupied;
    }

    /**
     * 
     */
    public set occupied(value: boolean) {
        this._occupied = value;
    }

    /**
     * @returns number
     */
    public get group(): number | null {
        return this._group;
    }

    /**
     * @param seat Seat
     */
    public set group(value: number | null) {
        this._group = value;
    }

    public get position(): number {
        return this._position;
    }

    public set position(value: number) {
        this._position = value;
    }   

    /**
     * 
     * @param group number
     */
    public occupy(group: number | null): void {
        this._occupied = true;
        this._group = group || new Date().getTime();
    }

    public unoccupy(): void {
        this._occupied = false;
    }

    public isAvailable(): boolean {
        return !this._occupied;
    }

}