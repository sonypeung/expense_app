const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenseOutput = document.querySelector('#total-expense');
const alertCtrl = document.querySelector('ion-alert-controller');
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
        alertCtrl.create({
            message: 'Please enter a valid reason and/or amount.',
            header: 'Invalid inputs',
            buttons: ['Ok']
        }).then(alert => {
            alert.present();
        })
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