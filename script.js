let screenWord = document.querySelector('.content__word')
let input = document.querySelector('.content__input')
let button = document.querySelector('.content__button')
let rand = Math.floor(Math.random() * 3)
let translateText = document.querySelector('.content__translate')
const words = [
    {
        name: 'деревня',
        translate: '마을'
    },
    {
        name: 'школа',
        translate: '학교'
    },
    {
        name: 'универ',
        translate: '대학'
    },
    {
        name: 'театр',
        translate: '극장'
    },
    {
        name: 'церковь',
        translate: '교회에'
    },
    {
        name: 'ресторан',
        translate: '레스토랑'
    },
    {
        name: 'кафе',
        translate: '카페'
    },
    {
        name: 'отель',
        translate: '호텔'
    },
    {
        name: 'банк',
        translate: '은행'
    },
    {
        name: 'кинотеатр',
        translate: '영화'
    },

]




   
    screenWord.innerHTML = words[rand].name
    
    button.addEventListener('click', (e) => {
        e.preventDefault()
        let valueOfInput = input.value
        if(valueOfInput === words[rand].translate){
            rand = Math.floor(Math.random() * 10)
            screenWord.innerHTML = words[rand].name
            translateText.innerHTML = ''
            input.value = ''
        }
        else{
            console.log('не правильно')
            let translateText = document.querySelector('.content__translate')
            translateText.innerHTML = words[rand].translate
            input.value = ''
        }
        
    
        console.log(valueOfInput)
    
    })

