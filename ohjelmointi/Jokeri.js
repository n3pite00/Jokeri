const table = document.getElementById('jokeritaulukko')
const result = document.getElementById('jokerivoitto')
var rowcount = getElementById('jokeritaulukko').rows.length

function generateRandomNumber() {
    const RandomNumber = Math.floor(Math.random() * 10)
    return RandomNumber
}


function JokeriRivi() {
    var row = table.insertRow(0)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)
    var cell7 = row.insertCell(6)
    var cell8 = row.insertCell(7)

    const number1 = generateRandomNumber()
    const number2 = generateRandomNumber()
    const number3 = generateRandomNumber()
    const number4 = generateRandomNumber()
    const number5 = generateRandomNumber()
    const number6 = generateRandomNumber()
    const number7 = generateRandomNumber()
    const number8 = generateRandomNumber()

    cell1.innerHTML = number1
    cell2.innerHTML = number2
    cell3.innerHTML = number3
    cell4.innerHTML = number4
    cell5.innerHTML = number5
    cell6.innerHTML = number6
    cell7.innerHTML = number7
    cell8.innerHTML = number8

    var rowcount = document.getElementById('jokeritaulukko').rows.length
    result.innerHTML = "Valmiita rivejä " + rowcount
}

