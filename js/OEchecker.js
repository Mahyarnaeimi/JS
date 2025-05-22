let numberInput = document.getElementById('number')
let checkButton = document.getElementById('check')
let resultBox = document.getElementById('result')

checkButton.onclick = function() {
    if(numberInput.value % 2 == 0) {
       resultBox.innerText= 'The number is even'
    }else {
        resultBox.innerText = 'The number is odd'
    }
}