const accordions = Array.from(document.querySelectorAll('.accordion'))
const chooseButton = document.querySelector('.button')
chooseButton.style.setProperty('background', 'red')


const element = document.querySelector('.element')
const style = getComputedStyle(element)

const backgroundColor = style.backgroundColor
// console.log(backgroundColor)

// console.log(style)



accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', event => {
        accordion.classList.toggle('is-open')
    })
})




const list = document.querySelectorAll('li')
const firstItem = list[0]
console.log(firstItem)