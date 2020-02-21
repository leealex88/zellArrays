function init() {

    // const items = document.querySelectorAll('.item')

    // for (item of items) {
    //     item.classList.add('red')
    // }
    // items.forEach(function (item) {
    //     item.classList.add('red')
    // })


    //     Do the following:

    // 1. Select all good guys with attributes
    // 2. Give good guys a yay class
    // 3. Select all villains with attributes
    // 4. Give villains a nay class
    // 5. Select all characters through the character class
    // 6. Give all characters a star-wars class

    // 1.
    const items = document.querySelectorAll('.character')

    for (item of items) {
        item.classList.add('yay')
    }

    const secondItem = document.querySelectorAll()

    console.log(secondItem)


}
window.addEventListener('DOMContentLoaded', init)