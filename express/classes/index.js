"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SushiBar_1 = require("./classes/SushiBar");
const bar = new SushiBar_1.SushiBar(12);
bar.printSeating();
console.log(bar.occupySeats(4));
console.log(bar.occupySeats(3));
bar.printSeating();
//# sourceMappingURL=index.js.map