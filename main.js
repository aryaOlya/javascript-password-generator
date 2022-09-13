const upperLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ]
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const specialChars = ['!','@','$','%','?']

const numbers = ['1','2','3','4','5','6','7','8','9','0']

let allow = upperLetters.concat(lowerLetters)
allow = allow.concat(specialChars)
allow = allow.concat(numbers)

let btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    let length= document.getElementById('length').value
    let password = [upperLetters[Math.floor(Math.random()*26)],lowerLetters[Math.floor(Math.random()*26)],numbers[Math.floor(Math.random()*10)],specialChars[Math.floor(Math.random()*5)]]


    for (let i=4; i<length; i++ ){
        password[i] = allow[Math.floor(Math.random()*67)]
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    password = shuffleArray(password)
    password = password.join('')
    let passField = document.getElementById('password')
    passField.innerText = password
})
