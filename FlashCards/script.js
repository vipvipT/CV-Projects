const inputCard = document.querySelector('#input-cards')
const question = document.querySelector('#question')
const answer = document.querySelector('#answer')
const flashcard = document.querySelector('.flashcard-items')
const flashGrid = document.querySelector('.flashcard-grid')
const saveButton = document.querySelector('#save-button')
const textarea = document.querySelectorAll('.text')
const howToUse = document.querySelector('#how-to-use')

function closeInput() {
    inputCard.classList.add('hide')
    howToUse.classList.add('hide')
}

function inputCards() {
    if(inputCard.classList.contains('hide')) {
        inputCard.classList.remove('hide')
        howToUse.classList.remove('hide')
    }else {
        inputCard.classList.add('hide')
        howToUse.classList.add('hide')
    }
}


function save() {
    
    if(question.value === '' || answer.value === '') {
        alert('Required fields!')
    }else {
        
        
        const div = document.createElement('div')
        div.classList.add('flashcard-items')
        flashGrid.appendChild(div)
        const p = document.createElement('p')
        p.innerHTML = question.value
        p.classList.add('question')
        div.appendChild(p)
    
        const p2 = document.createElement('p')
        p2.innerHTML = answer.value
        p2.classList.add('answer')
        p2.classList.add('hide')
        div.appendChild(p2)
    
        question.value = ''
        answer.value = ''

        div.addEventListener('click', () => {
            setTimeout(() => {
                if(p2.classList.contains('hide')) {
                    p.classList.add('hide')
                    p2.classList.remove('hide')
                }else {
                    p2.classList.add('hide')
                    p.classList.remove('hide')
                }
            }, 200)
    
        })
    
        div.addEventListener('dblclick', () => {
            flashGrid.removeChild(div)
        })
    }

}


inputCard.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        e.preventDefault()
    }
})



window.addEventListener('keydown', function(e) {
    if(inputCard.classList.length < 1) {
        if(e.keyCode === 13) {
            save()
        }
    }
})