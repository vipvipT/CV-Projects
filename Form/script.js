const inputEmail = document.querySelector('#inputEmail')
const inputPassword = document.querySelector('#inputPassword')


const msg = document.querySelector('small')
const button = document.querySelector('button')



localStorage.setItem('email', 'admin@gmail.com')
localStorage.setItem('password', 'admin')

const email = localStorage.getItem('email')
const password = localStorage.getItem('password')

button.addEventListener('click', (event) => {
    if(inputEmail.value != email || inputPassword.value != password) {
        event.preventDefault()
        msg.style.color = 'red'
        msg.innerHTML = '*Invalid email or password'
        inputEmail.value = ''
        inputPassword.value = ''

        setInterval(() => {
            msg.style.color = 'grey'
            msg.innerHTML = `We'll never share your email with anyone else.`
        }, 1800);
    }
})