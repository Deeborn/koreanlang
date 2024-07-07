let screenWord = document.querySelector('.content__word')
let input = document.querySelector('.content__input')
let button = document.querySelector('.content__button')
let rand = Math.floor(Math.random() * 3)
let translateText = document.querySelector('.content__translate')
const words = [
    {
        name: 'делать',
        translate: '하다'
    },
    {
        name: 'быть',
        translate: '있다'
    },
    {
        name: 'говорить',
        translate: '말하다'
    },
    {
        name: 'приходить',
        translate: '오다'
    },
    {
        name: 'идти',
        translate: '가다'
    },
    {
        name: 'видеть',
        translate: '보다'
    },
    {
        name: 'ждать',
        translate: '기다리다'
    },
    {
        name: 'встречать',
        translate: '만나다'
    },
    {
        name: 'жить',
        translate: '살다'
    },
    {
        name: 'знать',
        translate: '알다'
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

