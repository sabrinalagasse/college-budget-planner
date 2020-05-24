//income section
const monthIncomeElements = document.getElementsByClassName('monthlyIncome');
const monthIncomeTotal = document.getElementById('monthIncomeTotal');

const termIncomeElements = document.getElementsByClassName('termIncome');
const termIncomeTotal = document.getElementById('termIncomeTotal');

const yearlyIncomeElements = document.getElementsByClassName('yearIncome');
const yearlyIncomeTotal = document.getElementById('yearIncomeTotal');
console.log(yearlyIncomeTotal);

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
      console.log('not a num');
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