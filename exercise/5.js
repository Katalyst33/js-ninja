checkSpeed(80);



function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed <= speedLimit + kmPerPoint)
        console.log('you are OK');

    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (points >= 12) {
            console.log('you have been suspended')
        }
        else {
            console.log('Points', points);
        }

    }
}

