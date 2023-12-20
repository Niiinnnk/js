const age = 27;
console.log(Number(age), Boolean(age), String(age));

let names = "Игнат";
console.log(Number(names), Boolean(names), String(names));

let bool = 2*2==5;
console.log(Number(bool), Boolean(bool), String(bool));

let nulls = null;
console.log(Number(nulls), Boolean(nulls), String(nulls));

let undef = undefined;
console.log(Number(undef), Boolean(undef), String(undef));

let object = new Object();
console.log(Number(object), Boolean(object), String(object));

let bigint = 1n;
console.log(Number(bigint), Boolean(bigint), String(bigint));

let symbol = Symbol("id");
console.log("Нельзя преобразовать в Number", Boolean(symbol), String(symbol));