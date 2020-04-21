const address = createAddress('a', 'b', 'c');

console.log(address)

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode

    }
}



function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}