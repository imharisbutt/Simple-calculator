let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

let addBtn = document.getElementById("addBtn");
addBtn.onclick = function() {
    let res = Number(num1.value) + Number(num2.value);
    result.textContent = "Result: " + res;
};

let subBtn = document.getElementById("subBtn");
subBtn.onclick = function() {
    let res = Number(num1.value) - Number(num2.value);
    result.textContent = "Result: " + res;
};

let mulBtn = document.getElementById("mulBtn");
mulBtn.onclick = function() {
    let res = Number(num1.value) * Number(num2.value);
    result.textContent = "Result: " + res;
};

let divBtn = document.getElementById("divBtn");
divBtn.onclick = function() {
    let res = Number(num1.value) / Number(num2.value);
    result.textContent = "Result: " + res;
};