//income section
const monthIncomeElements = document.getElementsByClassName('monthlyIncome');
const monthIncomeTotal = document.getElementById('monthIncomeTotal');

const termIncomeElements = document.getElementsByClassName('termIncome');
const termIncomeTotal = document.getElementById('termIncomeTotal');

const yearlyIncomeElements = document.getElementsByClassName('yearIncome');
const yearlyIncomeTotal = document.getElementById('yearIncomeTotal');

addEachListener(monthIncomeElements, monthIncomeTotal);
addEachListener(termIncomeElements, termIncomeTotal);
addEachListener(yearlyIncomeElements, yearlyIncomeTotal);

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
let calcButtons = document.getElementsByClassName('pickCalc');
for (let choice of calcButtons) {
  if (choice.checked) {
    console.log(choice.id + ' is checked');
  }
}

let totalIncomeEl = document.getElementById('totalIncome');
let totalExpensesEl = document.getElementById('totalExpenses');
let totalBalanceEl = document.getElementById('balance');
