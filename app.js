
const displayEl1 = document.querySelector(".display-1");
const displayEl2 = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let lastOperation = null;
let haveDot = false;
let dis1Num = "";
let dis2Num = "";
let result = null;
numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    displayEl2.innerText = dis2Num;
  });
});
operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationname = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationname);
    lastOperation = operationname;
    console.log(result);
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + "  " + name + " ";
  displayEl1.innerText = dis1Num;
  displayEl2.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}
function mathOperation() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}
equal.addEventListener("click", () => {
  if (!dis2Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  displayEl2.innerText = result;
  tempResultEl.innerText = ``;
  dis2Num = result;
  dis1Num = ``;
});
clearAllEl.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  displayEl1.innerText = "0";
  displayEl2.innerText = "0";
  tempResultEl.innerText = "";
  result = "";
});
clearLastEl.addEventListener("objectmetod", () => {
  dis2Num = "";
  displayEl2.innerText = "0";
});
window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickbuttonEL(e.key);
  } else if (
    e.key === "+" ||
    e.key === "/" ||
    e.key === "+-" ||
    e.key === "%"
  ) {
    clickOpertion(e.key);
  } else if (e.key === "*") {
    clickOpertion("x");
  } else if (e.key == "Enter" || e.key === "=") {
    clickequal();
  }
  else if (e.key === "*") {
    clickOperation("X");
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  } else if (e.key == "c" || e.key === "C") {
    clickclearAllEl();
  } else if (e.key == "x" || e.key === "X") {
    clickclearLastEl();
  } else if (e.key == "Backspace") {
    clickBackspace();
  }
});
function clickbuttonEL(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOpertion(key) {
  operation.forEach((operation) => {
    if (operation.innerHTML === key) {
      operation.click();
    }
  });
}
function clickequal() {
  equal.click();
}
function clickclearAllEl() {
  clearAllEl.click();
}

function clickclearLastEl() {
  clearLastEl.click();
}
function clickBackspace() {
  dis2Num = dis2Num.substring(0, dis2Num.length - 1);
  displayEl2.innerText = dis2Num;
}
