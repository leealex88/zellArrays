function init() {

    let people = [
        'Benjamin Franklin',
        'Thomas Edison',
        'Franklin Roosevelt',
        'Mahatma Gandhi',
        'Napoleon Bonaparte',
        'Abraham Lincoln'
    ]
    // To make like easier for you, use slice to make a copy of the array before answer each question.

    let peopleCopy = people.slice()
    // 1. What is the index of Mahatma Gandhi in this list of people? Use indexOf.

    // const posOfMahatmaGandhi = peopleCopy.indexOf('Mahatma Gandhi')
    // console.log(posOfMahatmaGandhi)
    // 2. Add Winston Churchill and Albert Einstein to the start of the list.

    // const addWinstonAndAlbert = peopleCopy.unshift("Winston Churchill", "Albert Einstein")
    const addWinstonAndAlbert = peopleCopy.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
    // 3. Add Charles Darwin and Walt Disney to the end of the list.

    // const addCharlesWalt = peopleCopy.push("Charles Darwin", "Walt Disney")
    // const addCharlesWalt = peopleCopy.splice(peopleCopy.length, 0, "Charles Darwin", "Walt Disney")

    // 4. Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi. Use splice.

    // const addPisassoBeethoven = peopleCopy.splice(6, 0, "Pablo Picasso", "Ludwig van Beethoven")

    // 5. Remove Benjamin Franklin and Thomas Edison

    // const removeBenTho = peopleCopy.shift() [you can remove with shift just the first values]
    // const removeBenTho = peopleCopy.splice(2, 2) [starts at index 2 and delete 2 items]

    // 6.Remove Napoleon Bonaparte and Abraham Lincoln

    // const removeNapoleon = peopleCopy.pop()
    // const removeLincolc = peopleCopy.pop()


    // const gandhiIndex = peopleCopy.indexOf('Mahatma Gandhi')
    // console.log(gandhiIndex)

    // const addPicassoBetthoven = peopleCopy.splice(gandhiIndex + 1, 0, 'Pablo Picasso', 'Ludwig van Beethoven')

    // console.log(peopleCopy)



}
window.addEventListener('DOMContentLoaded', init)