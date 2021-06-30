// alert("Welcome to Our Site");

function calculate() {
  let a = prompt("What is Your Birth Year");
  let b = new Date().getFullYear();
  console.log(b);

  let result = (a - b) * 365;

  document.getElementById("result").innerHTML = "Your age in days are" + result;
}

function reset() {
  document.getElementById("result").innerHTML = "";
}
