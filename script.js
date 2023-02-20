const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv= document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  
  const bill = Number(billInput.value)
  const tipPercentage = Number(tipInput.value)/100
  const tipAmount = bill * tipPercentage
  const total = tipAmount + bill
  const perPersonTotal = total / numberOfPeople
  
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople++
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  //guard clause
if(numberOfPeople == 1) return
  
  // decrement the amount of people
numberOfPeople--
numberOfPeopleDiv.innerText = numberOfPeople

calculateBill()
}
