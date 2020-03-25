const output = fizzBuzz('jgvhkb');
console.log(output);

function fizzBuzz(input) {
    if (input % 5 === 0 && input % 3 === 0)
        return 'fizzBuzz';
    if (input % 5 === 0)
        return 'Buzz';
    if (input % 3 === 0)
        return 'fizz';
    if (typeof input !== 'number')
        return NaN;
    if ((input % 5 !== 0) && (input % 3 !== 0))
        return 'tah!! Not divisible';

}