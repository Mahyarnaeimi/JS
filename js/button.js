let button = document.getElementById('button')

let ageIn = document.getElementById('age')

button.onclick = function () {
    if(ageIn.value >= 18){
        alert('Welcome to our portial')
    }
    if(ageIn.value < 18){
        alert('You are not allowed to log in!')
    }
}