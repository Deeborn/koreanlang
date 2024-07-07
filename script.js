let screenWord = document.querySelector('.content__word')
let input = document.querySelector('.content__input')
let button = document.querySelector('.content__button')
let rand = Math.floor(Math.random() * 3)
let translateText = document.querySelector('.content__translate')
const words = [
    {
        name: 'больница',
        translate: '병원'
    },
    {
        name: 'полиция',
        translate: '학교'
    },
    {
        name: 'почта',
        translate: '우체국'
    },
    {
        name: 'вокзал',
        translate: '역'
    },
    {
        name: 'аэропорт',
        translate: '공항'
    },
    {
        name: 'магазин',
        translate: '가게'
    },
    {
        name: 'аптека',
        translate: '조제'
    },
    {
        name: 'рынок',
        translate: '시장'
    },
    {
        name: 'офис',
        translate: '사무실'
    },
    {
        name: 'компания',
        translate: '회사'
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

