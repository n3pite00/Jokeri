lottonumbers = []

while (lottonumbers.length < 9) {
    const Randomnumber = Math.floor(Math.random() * 37) + 1

    if (!lottonumbers.includes(Randomnumber)) {
        lottonumbers.push(Randomnumber)
    }
}

const additionalTable = lottonumbers.slice(-2)


lottonumbers.sort((a,b) => a-b)
additionalTable.sort((a,b) => a-b)

const varsinaisetNumerot = document.getElementById('numbers')

for (let i = 0; i < 7; i++) {
    const row = varsinaisetNumerot.insertRow(0)
    const cell1 = row.insertCell(0)
    cell1.textContent = lottonumbers[i]

}

const lisanumerot = document.getElementById('additionalnumbers')

for (let i = 0; i < 2; i++) {
    const row = lisanumerot.insertRow(0)
    const cell1 = row.insertCell(0)
    cell1.textContent = additionalTable[i]
}