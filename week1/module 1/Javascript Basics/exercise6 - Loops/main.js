// object exercises ..
// ex.1 

/* output
{name: "Ashley", age: 23},
{name: "Donovan", age: 47},
{name: "Lucas", age: 18}
*/


const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < ages.length; i++) {
    let newObject = {}
    newObject.name = names[j];
    newObject.age = ages[j];
    people.push(newObject)
}
console.log(people)