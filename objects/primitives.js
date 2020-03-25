let x = { value: 10 };
let y = x;

x.value = 20;

let number = { value: 10 };

function increase(number) {
    number.value++;
};

increase(number);
console.log(number);