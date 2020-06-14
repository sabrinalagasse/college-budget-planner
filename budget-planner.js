//income section
const monthIncomeElements = document.getElementsByClassName('monthlyIncome');
const monthIncomeTotal = document.getElementById('monthIncomeTotal');

const termIncomeElements = document.getElementsByClassName('termIncome');
const termIncomeTotal = document.getElementById('termIncomeTotal');

const yearIncomeElements = document.getElementsByClassName('yearIncome');
const yearIncomeTotal = document.getElementById('yearIncomeTotal');

addEachListener(monthIncomeElements, monthIncomeTotal);
addEachListener(termIncomeElements, termIncomeTotal);
addEachListener(yearIncomeElements, yearIncomeTotal);

//fixed expenses section
const monthFixedExpenseElements = document.getElementsByClassName('monthFE');
const monthFixedExpenseTotal = document.getElementById('monthFETotal');

const termFixedExpenseElements = document.getElementsByClassName('termFE');
const termFixedExpenseTotal = document.getElementById('termFETotal');

const yearFixedExpenseElements = document.getElementsByClassName('yearFE');
const yearFixedExpenseTotal = document.getElementById('yearFETotal');

addEachListener(monthFixedExpenseElements, monthFixedExpenseTotal);
addEachListener(termFixedExpenseElements, termFixedExpenseTotal);
addEachListener(yearFixedExpenseElements, yearFixedExpenseTotal);

//variable expenses section
const monthVarExpenseElements = document.getElementsByClassName('monthlyVE');
const monthVarExpenseTotal = document.getElementById('monthVETotal');

const termVarExpenseElements = document.getElementsByClassName('termVE');
const termVarExpenseTotal = document.getElementById('termVETotal');

const yearVarExpenseElements = document.getElementsByClassName('yearVE');
const yearVarExpenseTotal = document.getElementById('yearVETotal');

addEachListener(monthVarExpenseElements, monthVarExpenseTotal);
addEachListener(termVarExpenseElements, termVarExpenseTotal);
addEachListener(yearVarExpenseElements, yearVarExpenseTotal);

function addEachListener(period, totalElement) {
  for (let income of period) {
    income.addEventListener('change', function () {
      calculateTotal(period, totalElement);
    });
  }
}

function calculateTotal(period, totalElement) {
  let total = 0;
  let valid = true;
  for (let income of period) {
    let incomeValue = Number(income.value);
    if (isNaN(incomeValue)) {
      income.value = '';
      income.placeholder = 'Please enter a number';
      valid = false;
    } else {
      total += incomeValue;
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

function calcBalance() {
  console.log("calculating balance...")
  let calcButtons = document.getElementsByClassName('pickCalc');
  let selectedChoice;
  for (let choice of calcButtons) {
    if (choice.checked) {
      selectedChoice = choice.id;
    }
  }
  
  let totalIncome;
  let totalExpenses;
  let balance;
  switch(selectedChoice) {
    case "calcMonth":
      console.log('picked month');
      totalIncome = Number(monthIncomeTotal.innerText.substring(1));
      totalExpenses = Number(monthFixedExpenseTotal.innerText.substring(1)) + 
        Number(monthVarExpenseTotal.innerText.substring(1));
      break;
    case "calcTerm":
      console.log('picked term');
      totalIncome = Number(termIncomeTotal.innerText.substring(1));
      totalExpenses = Number(termFixedExpenseTotal.innerText.substring(1)) + 
        Number(termVarExpenseTotal.innerText.substring(1));
      break;
    case "calcYear":
      console.log('picked year');
      totalIncome = Number(yearIncomeTotal.innerText.substring(1));
      totalExpenses = Number(yearFixedExpenseTotal.innerText.substring(1)) + 
        Number(yearVarExpenseTotal.innerText.substring(1));
      break;
  }
  balance = totalIncome - totalExpenses;
  
  //display results
  totalIncomeElement.innerText = '$' + totalIncome;
  totalExpensesElement.innerText = '$' + totalExpenses;
  balanceElement.innerText = '$' + balance;

  console.log('calculated balance!');
}

