const Amountbill = document.getElementById("bill-amount");
const peopleCount = document.getElementById("people-count");
const disabled = document.getElementsByClassName("disabled");
const showTotal = document.getElementById("show-total");
const showTip = document.getElementById("show-tip");
const customBtn = document.getElementById("custom");
const showWarning = document.getElementById("zero");
const Btn = document.querySelectorAll(".btn");
const labelofpeople = document.getElementById("no_of_people");
const resetBtn = document.querySelector(".reset-btn");

Amountbill.addEventListener("change", billinputFn);
peopleCount.addEventListener("change", peopleinputFn);
customBtn.addEventListener("change", customInputFn);
resetBtn.addEventListener("click", buttonForReset);

Amountbill.value = "0.00";
peopleCount.value = "1";
showTip.innerHTML = "$" + (0.0).toFixed(2);
showTotal.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;
Btn.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
function billinputFn() {
  billValue = parseFloat(Amountbill.value);
  resetBtn.classList.remove("disable");
  resetBtn.classList.add("open");
  resetBtn.disabled = false;
  calculateTip();
  //   console.log(billValue);
}
function peopleinputFn() {
  peopleValue = parseFloat(peopleCount.value);
  if (peopleValue < 1) {
    showWarning.classList.add("empty");
    peopleCount.style.border = "thick solid red";
  } else {
    resetBtn.classList.remove("disable");
    resetBtn.classList.add("open");
    showWarning.classList.remove("empty");
    peopleCount.style.border = "none";
    calculateTip();
  }
  //   console.log(peopleValue);
}
function customInputFn() {
  tipValue = parseFloat(customBtn.value) / 100;
  resetBtn.classList.remove("disabled");

  Btn.forEach(function (val) {
    val.classList.remove("active");
  });
  calculateTip();
}

function handleClick(event) {
  Btn.forEach(function (val) {
    val.classList.remove("active");

    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  //   console.log(tipValue);
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    showTip.innerHTML = "$" + tipAmount.toFixed(2);
    showTotal.innerHTML = "$" + total.toFixed(2);
  }
}

function buttonForReset() {
  Amountbill.value = "0.00";

  peopleCount.value = "1";

  customBtn.value = "";
  showTotal.textContent = "0.0";
  showTip.textContent = "0.0";
  resetBtn.classList.remove("open");
  resetBtn.classList.add("disable");
}
