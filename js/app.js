function getNumbers() {
  let firstNum = document.getElementById("firstNum").value
  let secondNum = document.getElementById("secondNum").value
  let ttData = []

  // attempt to parse into integers
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)

  if (Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
    let ttData = calculate(firstNum, secondNum)
    displayData(ttData)
  } else {
    alert("You must enter integers")
  }
}

function calculate(firstNum, secondNum) {

  let ttCalculated = []

  for (let i = 1; i <= 100; i++) {
    if (i % firstNum == 0 && i % secondNum == 0) {
      ttCalculated.push("TipToe")
    } else if (i % firstNum == 0) {
      ttCalculated.push("Tip")
    } else if (i % secondNum == 0) {
      ttCalculated.push("Toe")
    } else {
      ttCalculated.push(i)
    }
  }

  return ttCalculated
}

function displayData(ttData) {
  //get the table body element from the page
  let tableBody = document.getElementById("results")

  //get the row from the template
  let templateRow = document.getElementById("ttTemplate")

  //clear table first
  tableBody.innerHTML = ""

  for (let i = 0; i < ttData.length; i += 5) {
    // grab the template from the html page
    const tableRow = document.importNode(templateRow.content, true)

    //grab only the columns in the template
    rowCols = tableRow.querySelectorAll("td")

    rowCols[0].classList.add(ttData[i])
    rowCols[0].textContent = ttData[i]

    rowCols[1].classList.add(ttData[i + 1])
    rowCols[1].textContent = ttData[i + 1]

    rowCols[2].classList.add(ttData[i + 2])
    rowCols[2].textContent = ttData[i + 2]

    rowCols[3].classList.add(ttData[i + 3])
    rowCols[3].textContent = ttData[i + 3]

    rowCols[4].classList.add(ttData[i + 4])
    rowCols[4].textContent = ttData[i + 4]

    tableBody.appendChild(tableRow)
  }
}