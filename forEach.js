function init() {


    const people = [{
            firstName: 'Benjamin',
            lastName: 'Franklin',
            yearOfDeath: 1790
        },
        {
            firstName: 'Thomas',
            lastName: 'Edison',
            yearOfDeath: 1931
        },
        {
            firstName: 'Franklin',
            lastName: 'Roosevelt',
            yearOfDeath: 1945
        },
        {
            firstName: 'Napolean',
            lastName: 'Bonaparte',
            yearOfDeath: 1821
        },
        {
            firstName: 'Abraham',
            lastName: 'Lincoln',
            yearOfDeath: 1865
        },
        {
            firstName: 'Mother',
            lastName: 'Theresa',
            yearOfDeath: 1962
        },
        {
            firstName: 'Mahatma',
            lastName: 'Gandhi',
            yearOfDeath: 1948
        },
        {
            firstName: 'Winston',
            lastName: 'Churchill',
            yearOfDeath: 1965
        },
        {
            firstName: 'Charles',
            lastName: 'Darwin',
            yearOfDeath: 1882
        },
        {
            firstName: 'Albert',
            lastName: 'Einstein',
            yearOfDeath: 1955
        },
        {
            firstName: 'Pablo',
            lastName: 'Picasso',
            yearOfDeath: 1973
        },
        {
            firstName: 'Ludwig',
            lastName: 'Beethoven',
            yearOfDeath: 1827
        },
        {
            firstName: 'Walt',
            lastName: 'Disney',
            yearOfDeath: 1966
        },
        {
            firstName: 'Henry',
            lastName: 'Ford',
            yearOfDeath: 1947
        },
        {
            firstName: 'Steve',
            lastName: 'Jobs',
            yearOfDeath: 2012
        }
    ]

    // Practice using forEach through an array of people (given above). Do the following:

    // 1. console.log the first name of each person in the array.

    // people.forEach(function (person) {
    //     console.log(person.firstName)
    // })

    // using arrow function
    // people.forEach(person => console.log(person.firstName))

    // 2. Make a second array that contains only the first name of each person.

    let onlyFirstNames = []

    // people.forEach(function (person) {
    //     let firstNames = person.firstName
    //     onlyFirstNames.push(firstNames)
    // })
    // console.log(onlyFirstNames)

    // 3. Make a third array that contains people that have died after 1950.

    let diedAfter1950 = []

    // people.forEach(function (person) {
    //     if (person.yearOfDeath > 1950) {
    //         const firstAndLastName = person.firstName + " " + person.lastName
    //         diedAfter1950.push(firstAndLastName)
    //     }
    // })
    // console.log(diedAfter1950)

    // 4. Find index of Charles Darwin in the array. 

    // console.log(people.findIndex('Charles Darwin'))

    people.forEach(function (person, index, people) {
        if (person.firstName === "Charles" && person.lastName === "Darwin") {
            console.log(index)
        }
    })

}
window.addEventListener('DOMContentLoaded', init)