/*
 * Income Section
 */
//access elements
const monthIncomeElements = document.getElementsByClassName('monthlyIncome');
const monthIncomeTotal = document.getElementById('monthIncomeTotal');

const termIncomeElements = document.getElementsByClassName('termIncome');
const termIncomeTotal = document.getElementById('termIncomeTotal');

const yearIncomeElements = document.getElementsByClassName('yearIncome');
const yearIncomeTotal = document.getElementById('yearIncomeTotal');

//add event listener for each time period
addEachListener(monthIncomeElements, monthIncomeTotal);
addEachListener(termIncomeElements, termIncomeTotal);
addEachListener(yearIncomeElements, yearIncomeTotal);

/*
 * Fixed Expenses Section
 */
//access elements
const monthFixedExpenseElements = document.getElementsByClassName('monthFE');
const monthFixedExpenseTotal = document.getElementById('monthFETotal');

const termFixedExpenseElements = document.getElementsByClassName('termFE');
const termFixedExpenseTotal = document.getElementById('termFETotal');

const yearFixedExpenseElements = document.getElementsByClassName('yearFE');
const yearFixedExpenseTotal = document.getElementById('yearFETotal');

//add event listeners for each time period
addEachListener(monthFixedExpenseElements, monthFixedExpenseTotal);
addEachListener(termFixedExpenseElements, termFixedExpenseTotal);
addEachListener(yearFixedExpenseElements, yearFixedExpenseTotal);

/*
 * Fixed Expenses Section
 */
//access elements
const monthVarExpenseElements = document.getElementsByClassName('monthlyVE');
const monthVarExpenseTotal = document.getElementById('monthVETotal');

const termVarExpenseElements = document.getElementsByClassName('termVE');
const termVarExpenseTotal = document.getElementById('termVETotal');

const yearVarExpenseElements = document.getElementsByClassName('yearVE');
const yearVarExpenseTotal = document.getElementById('yearVETotal');

//add event listeners for each time period
addEachListener(monthVarExpenseElements, monthVarExpenseTotal);
addEachListener(termVarExpenseElements, termVarExpenseTotal);
addEachListener(yearVarExpenseElements, yearVarExpenseTotal);

/*
* This function will has two parameters:
  period: list of each element within that time period
  totalElement: the element for the total of that time period

*/
function addEachListener(period, totalElement) {
  //for each element in the period list
  for (let element of period) {
    //when that element changes, calculate the total
    element.addEventListener('change', function () {
      calculateTotal(period, totalElement);
    });
  }
}

function calculateTotal(period, totalElement) {
  let total = 0;
  let valid = true;
  //for each item in period list
  for (let element of period) {
    let elementValue = Number(element.value);
    if (isNaN(elementValue)) {
      element.value = '';
      element.placeholder = 'Please enter a number';
      valid = false;
    } else {
      total += elementValue;
    }
  }
  if (valid) {
    totalElement.innerHTML = '$' + total;
  }
}

//total display
//access elements
let calcBalanceBtn = document.getElementById('calcBalanceBtn');
calcBalanceBtn.onclick = calcBalance;

//need to get the elements for displaying balance
//get total income
let totalIncomeElement = document.getElementById('totalIncome');
//get totalExpenses element
let totalExpensesElement = document.getElementById('totalExpenses');
//get balance element
let balanceElement = document.getElementById('balance');
//get the flip card
let card = document.getElementById('flipCard');
//get flip card header
let cardHeader = document.querySelector('#totalDisplay > h3');
//get error message
let errorMsg = document.getElementById('calcError');
//get the recalculate button
let recalcButton = document.getElementById('recalcButton');
//when recalcButton is clicked, flip card again
recalcButton.onclick = flip;

function calcBalance() {
  let calcButtons = document.getElementsByClassName('pickCalc');
  let selectedChoice; //radio button choice
  let selectedPeriod; //variable for display output

  //variables for calculation
  let balance;
  let totalIncome;
  let totalExpenses;
  for (let choice of calcButtons) {
    if (choice.checked) {
      selectedChoice = choice.id;
    }
  }

  switch (selectedChoice) {
    case 'calcMonth':
      selectedPeriod = 'Monthly';
      totalIncome = Number(monthIncomeTotal.innerText.substring(1));
      totalExpenses =
        Number(monthFixedExpenseTotal.innerText.substring(1)) +
        Number(monthVarExpenseTotal.innerText.substring(1));
      break;
    case 'calcTerm':
      selectedPeriod = 'Term';
      totalIncome = Number(termIncomeTotal.innerText.substring(1));
      totalExpenses =
        Number(termFixedExpenseTotal.innerText.substring(1)) +
        Number(termVarExpenseTotal.innerText.substring(1));
      break;
    case 'calcYear':
      selectedPeriod = 'Yearly';
      totalIncome = Number(yearIncomeTotal.innerText.substring(1));
      totalExpenses =
        Number(yearFixedExpenseTotal.innerText.substring(1)) +
        Number(yearVarExpenseTotal.innerText.substring(1));
      break;
  }
  //calculate balance
  balance = totalIncome - totalExpenses;

  if (totalIncome == 0 || totalExpenses == 0) {
    errorMsg.classList.remove('hide');
    return;
  }
  //display results
  cardHeader.innerText = selectedPeriod + ' Balance';
  totalIncomeElement.innerText = '$' + totalIncome;
  totalExpensesElement.innerText = '$' + totalExpenses;
  balanceElement.innerText = '$' + balance;

  //hide error message
  errorMsg.classList.add('hide');
  flip(); //flip card
}

/*
 * This function flips the card.
 */
function flip() {
  //toggle the flip class
  card.classList.toggle('flip');
}
