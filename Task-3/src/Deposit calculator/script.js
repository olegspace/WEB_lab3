const termDeposit = document.getElementById("termDeposit");
const typeDeposit = document.getElementById("typeDeposit");

typeDeposit.addEventListener("change", function () {
  const selectedValue = typeDeposit.value;
  if (selectedValue === "Пополняемый") {
    termDeposit.innerHTML = `
		<option value="none" selected disabled hidden>Срок вклада</option>
		<option value="6 месяцев">6 Месяцев (20 %)</option>
		<option value="12 месяцев">12 Месяцев (22 %)</option>
		<option value="18 месяцев">18 Месяцев (15 %)</option>
		<option value="24 месяцев">24 Месяцев (10 %)</option>
		`;
  } else if (selectedValue === "Срочный") {
    termDeposit.innerHTML = `
		<option value="none" selected disabled hidden>Срок вклада</option>
		<option value="3 месяца">3 Месяца (20 %)</option>
		<option value="6 месяцев">6 Месяцев (22 %)</option>
		<option value="9 месяцев">9 Месяцев (23 %)</option>
		<option value="12 месяцев">12 Месяцев (24 %)</option>
		<option value="18 месяцев">18 Месяцев (18 %)</option>
		<option value="24 месяцев">24 Месяцев (15 %)</option>
		`;
  }
});

function calculate() {
  const amountDeposit = document.getElementById("amountDeposit").value;
  const termDeposit = document.getElementById("termDeposit").value;
  const typeDeposit = document.getElementById("typeDeposit").value;
  let depositRate;
  let result;

  if (amountDeposit === "") {
    alert("Укажите сумму вклада");
    return;
  } else if (amountDeposit < 0) {
    alert("Сумма вклада не может быть меньше нуля");
    return;
  }
  if (typeDeposit === "none" && termDeposit === "none") {
    alert("Укажите вид и срок вклада");
    return;
  }
  if (typeDeposit === "none") {
    alert("Укажите тип вклада");
    return;
  }
  if (termDeposit === "none") {
    alert("Укажите cрок вклада");
    return;
  }

  if (typeDeposit === "Пополняемый") {
    switch (termDeposit) {
      case "6 месяцев":
        depositRate = 0.2;
        break;
      case "12 месяцев":
        depositRate = 0.22;
        break;
      case "18 месяцев":
        depositRate = 0.15;
        break;
      case "24 месяцев":
        depositRate = 0.1;
        break;
      default:
        depositRate = 0;
    }
  } else if (typeDeposit === "Срочный") {
    switch (termDeposit) {
      case "3 месяца":
        depositRate = 0.2;
        break;
      case "6 месяцев":
        depositRate = 0.22;
        break;
      case "9 месяцев":
        depositRate = 0.23;
        break;
      case "12 месяцев":
        depositRate = 0.24;
        break;
      case "18 месяцев":
        depositRate = 0.18;
        break;
      case "24 месяцев":
        depositRate = 0.15;
        break;
      default:
        depositRate = 0;
    }
  }

  result = amountDeposit * (1 + depositRate);

  document.getElementById(
    "first-result"
  ).innerHTML = `Вклад "${typeDeposit}" на срок "${termDeposit}", на сумму ${amountDeposit} руб.`;

  document.getElementById(
    "second-result"
  ).innerHTML = `В конце срока вы получите ${result.toFixed(2)} руб.`;
}
