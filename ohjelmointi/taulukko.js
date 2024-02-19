const input = document.getElementById('numeroinput')
const list = document.getElementById('numerotable')
const sort = document.querySelector('span')
const numbers = []

function addNumber() {
    const newNumber = parseFloat(input.value)
    numbers.push(newNumber)
    addTableRow(newNumber)
    input.value = ''
}

input.addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
        addNumber()
    }
})

const deleteRow = (number) => {
    const index = numbers.indexOf(number)
    numbers.splice(index,1)
    list.deleteRow(index)
}

const addTableRow = (number) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)

    col1.innerHTML = number
}

function alertMin() {
    const minimi = Math.min(...numbers)
    alert('Min number is ' +  minimi)
}

function alertMax() {
    const maksimi = Math.max(...numbers)
    alert('Max number is ' +  maksimi)
}

function alertavg() {
    var sum = 0
    numbers.forEach(num => {
        sum += num
    })

    average = sum / numbers.length

    alert('Average is ' + average )
}

function sortTable() {
    numbers.sort(function(a, b) {
        return a - b;
    })
    
    list.innerHTML = "";

    numbers.forEach((number) => {
        const rivi = list.insertRow()
        const col1 = rivi.insertCell(0)
        
        col1.innerHTML = number
    })
}