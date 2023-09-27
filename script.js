let containerDiv = document.getElementById('container')
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let sccoreCount = document.getElementById('score')
let addTable = document.getElementById('mainTable')

let scoreInput = 0;
function tableFunction() {
    let trTable = document.createElement('tr')
    trTable.className = "trTable"

    let firstNameTd = document.createElement('td')
    firstNameTd.className = 'firstNameTd'
    firstNameTd.innerText = firstName.value
    // firstName.value=""
    
    let lastNameTd = document.createElement('td')
    lastNameTd.className = 'lastNameTd'
    lastNameTd.innerText = lastName.value
    // lastName.value=""


    let scoreTd = document.createElement('td')
    scoreTd.className = 'thirdTr'
    scoreTd.innerHTML = sccoreCount.value
    // sccoreCount.value=''


    let totalScore = document.createElement('td')
    totalScore.className = "totalScore"
    scoreInput += +sccoreCount.value
    totalScore.innerHTML = scoreInput


    trTable.appendChild(firstNameTd)
    trTable.appendChild(lastNameTd)
    trTable.appendChild(scoreTd)
    trTable.appendChild(totalScore)


    addTable.appendChild(trTable)
}

