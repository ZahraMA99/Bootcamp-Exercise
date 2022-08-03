let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
let period //= currentYear - yearOfTeslaPurchase // how long ago the customer bought their Tesla


if (boughtTesla == true && isUSCitizen == true) {
    period = prompt("how long ago the customer bought their Tesla ?")
    if (period >= 4) {
        console.log(" would like an upgrade ?")
    } else {
        console.log("Are you satisfied with the car ?")
    }
} else if (isUSCitizen != true && boughtTesla == true) {
    console.log("would like to move to the US ?")
} else {
    console.log("whether they are interested in buying one ?")
}