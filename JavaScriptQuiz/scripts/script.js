const content = document.querySelector('.main')
const questionNumber = document.querySelector('.count')
const questionText = document.querySelector('.question')
const optionContainer = document.querySelector('.optionBox')
const resultContainer = document.querySelector('#resultContainer')
const correctContainer = document.querySelector('.correctContainer')


let questionCounter = 0
let correctAnswer = 0
let currentQuestion
let avaliableQuestion = []
let avaliableOptions = []



function setAvaliableQuestion() {
    const totalQuestion = quiz.length
    for(let i = 0; i < totalQuestion; i++) {
        avaliableQuestion.push(quiz[i])
    }
}


function getNewQuestion() {
    questionNumber.innerHTML = `Question ${questionCounter + 1} of ${quiz.length}`

    const questionIndex = avaliableQuestion[Math.floor(Math.random() * avaliableQuestion.length)]
    currentQuestion = questionIndex
    questionText.innerHTML = currentQuestion.question

    const index1 = avaliableQuestion.indexOf(questionIndex)
    avaliableQuestion.splice(index1, 1)

    const optionLen = currentQuestion.options.length

    optionContainer.innerHTML = ''
    for(let i = 0; i < optionLen; i++) {
        avaliableOptions.push(i)
    }

    for(let i = 0; i < optionLen; i++) {

        const optonIndex = avaliableOptions[Math.floor(Math.random() * avaliableOptions.length)]
        const index2 = avaliableOptions.indexOf(optonIndex)

        avaliableOptions.splice(index2, 1)
        const option = document.createElement("p")
        option.innerHTML = currentQuestion.options[optonIndex]
        option.id = optonIndex
        option.className = 'option'
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)")
    }

    questionCounter++
}

function getResult(element) {
    const id = parseInt(element.id)
    if(id === currentQuestion.answer) {
        element.style.backgroundColor = "green"
        element.style.boxShadow = "0px 0px 10px green"
        correctAnswer++
        console.log(correctAnswer)
    }else {
        element.style.backgroundColor = "red"
        element.style.boxShadow = "0px 0px 10px red"

        setTimeout(() => {
            const optionLen = optionContainer.children.length
            for(let i = 0; i < optionLen; i++){
                if(parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                    optionContainer.children[i].style.backgroundColor = "green"
                    optionContainer.children[i].style.boxShadow = "0px 0px 10px green"
                }
            }
        }, 50)


    }

    unclickableOptions()
}


function unclickableOptions() {
    const optionLen = optionContainer.children.length
    for(let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("alreadyAnswered")
    }
}


function next() {
    if(questionCounter === quiz.length) {
        console.log('game over')
        gameOver()
    }else{
        getNewQuestion()
    }
}

function gameOver() {
    content.classList.add('hide')
    resultContainer.classList.remove('hide')


    const finalCorrect = document.createElement('p')
    finalCorrect.innerHTML = `Correct Answers: ${correctAnswer} of ${quiz.length}`
    correctContainer.appendChild(finalCorrect)

    back
}

function back() {
    window.location.assign('index.html')
}


window.onload = function() {
    setAvaliableQuestion()
    getNewQuestion()
}