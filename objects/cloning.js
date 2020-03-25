const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

const another = { ...circle };


console.log(another)
console.log(circle)