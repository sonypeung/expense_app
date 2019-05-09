const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenseOutput = document.querySelector('#total-expense');
let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}
confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0
    ) {
        return;
    }

    let newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ' ' + enteredAmount;
    expensesList.appendChild(newItem);
    totalExpenses += +enteredAmount

    totalExpenseOutput.textContent = totalExpenses;

    clear();
});

cancelBtn.addEventListener('click', clear);