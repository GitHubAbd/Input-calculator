let output = document.getElementById("output");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let calcData = {
  firstValue: 0,
  secondValue: 0,
  operator: "",
};

function calculator(a, b, operator) {
  if (operator == "+") return a + b;
  else if (operator == "-") return a - b;
  else if (operator == "*") return a * b;
  else if (operator == "/") return a / b;
  else if (operator == "%") return a % b;
  else if (operator == "^") return a ** b;
}

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    this.firstValue = +input1.value;
    this.secondValue = +input3.value;
    this.operator = input2.value;

    output.innerHTML = calculator(this.firstValue, this.secondValue, this.operator);

    input1.value = "";
    input2.value = "";
    input3.value = "";
  }
});
