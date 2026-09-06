// 1. Positive, Negative or Zero
function checkSign() {
  var n = document.getElementById("num1").value;
  if (n === "") return;
  n = Number(n);
  if (n > 0) {
    document.getElementById("ans1").innerText = "Positive";
  } else if (n < 0) {
    document.getElementById("ans1").innerText = "Negative";
  } else {
    document.getElementById("ans1").innerText = "Zero";
  }
}

// 2. Odd or Even
function checkOddEven() {
  var n = document.getElementById("num2").value;
  if (n === "") return;
  n = Number(n);
  if (n % 2 === 0) {
    document.getElementById("ans2").innerText = "Even Number";
  } else {
    document.getElementById("ans2").innerText = "Odd Number";
  }
}

// 3. Largest of Three Numbers
function findLargest() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);

  if (a >= b && a >= c) {
    document.getElementById("ans3").innerText = a + " is Largest";
  } else if (b >= a && b >= c) {
    document.getElementById("ans3").innerText = b + " is Largest";
  } else {
    document.getElementById("ans3").innerText = c + " is Largest";
  }
}

// 4. Check Prime Number
function checkPrime() {
  var n = Number(document.getElementById("num4").value);
  if (n <= 1) {
    document.getElementById("ans4").innerText = "Not Prime";
    return;
  }
  var isPrime = true;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.getElementById("ans4").innerText = "Prime Number";
  } else {
    document.getElementById("ans4").innerText = "Not Prime";
  }
}
