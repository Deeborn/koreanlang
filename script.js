let screenWord = document.querySelector('.content__word')
let input = document.querySelector('.content__input')
let button = document.querySelector('.content__button')
let rand = Math.floor(Math.random() * 3)
let translateText = document.querySelector('.content__translate')
const words = [
    {
        name: 'место проживания',
        translate: '내집'
    },
    {
        name: 'здание',
        translate: '건물'
    },
    {
        name: 'место',
        translate: '장소'
    },
    {
        name: 'вход',
        translate: '입구'
    },
    {
        name: 'выход',
        translate: '출구'
    },
    {
        name: 'центр',
        translate: '센터'
    },
    {
        name: 'двор',
        translate: '마당'
    },
    {
        name: 'крыша',
        translate: '지붕'
    },
    {
        name: 'забор',
        translate: '울타리'
    },
    {
        name: 'участок',
        translate: '땅'
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

