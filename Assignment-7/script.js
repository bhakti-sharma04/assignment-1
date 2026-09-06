// 1. Decimal to Binary
function toBinary() {
  var num = Number(document.getElementById("dec").value);
  var binary = num.toString(2);
  document.getElementById("res1").innerText = "Binary: " + binary;
}

// 2. Count character occurrences in string
function countChar() {
  var str = document.getElementById("str").value;
  var ch = document.getElementById("ch").value;
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    }
  }
  document.getElementById("res2").innerText = "Count: " + count;
}

// 3. First letter uppercase
function capitalize() {
  var str = document.getElementById("text").value;
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  document.getElementById("res3").innerText = words.join(" ");
}
