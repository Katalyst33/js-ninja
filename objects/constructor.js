


//factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };

}

const circle = createCircle(2);

console.log(circle1);

//construtor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}



const another = new Circle(1);