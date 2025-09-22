document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseListDisplay = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculate();
  renderExpenses();
  updateTotal();
  savetolocalstorage();
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newexpenses = { id: Date.now(), name, amount };
      expenses.push(newexpenses);
      savetolocalstorage();
      updateTotal();
      renderExpenses();
      // clear input
      expenseAmountInput.value = "";
      expenseNameInput.value = "";
    }
  });

  function renderExpenses() {
    expenseListDisplay.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
     ${expense.name}-$${expense.amount}
     <button data-id="${expense.id}">Delete </button>`;
      expenseListDisplay.appendChild(li);
    });
  }

  function calculate() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }
  function updateTotal() {
    totalAmount = calculate();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }
  function savetolocalstorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  expenseListDisplay.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);
      savetolocalstorage();
      renderExpenses();
      updateTotal();
    }
  });
});
