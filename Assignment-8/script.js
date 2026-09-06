// 1. Calculator Class
class Calculator {
  calculateSum(number1, number2) {
    return number1 + number2;
  }
  calculateDifference(number1, number2) {
    return number1 - number2;
  }
}

// 2. Biggest Class
class Biggest {
  constructor(arr) {
    this.arr = arr;
  }
  display() {
    var max = this.arr[0];
    for (var i = 1; i < this.arr.length; i++) {
      if (this.arr[i] > max) {
        max = this.arr[i];
      }
    }
    return max;
  }
}

// 3. Rectangle Class
class Rectangle {
  constructor() {
    this.length = 1;
    this.width = 1;
  }

  setLength(l) { this.length = l; }
  getLength() { return this.length; }

  setWidth(w) { this.width = w; }
  getWidth() { return this.width; }

  calculateArea() {
    return this.length * this.width;
  }

  calculatePerimeter() {
    return 2 * (this.length + this.width);
  }
}

// Simple test functions for buttons
function testCalculator() {
  var c = new Calculator();
  var sum = c.calculateSum(10, 20);
  var diff = c.calculateDifference(30, 10);
  document.getElementById("calcRes").innerText = "Sum: " + sum + ", Difference: " + diff;
}

function testBiggest() {
  var b = new Biggest([10, 45, 23, 89, 12]);
  var largest = b.display();
  document.getElementById("bigRes").innerText = "Largest element is: " + largest;
}

function testRectangle() {
  var r = new Rectangle();
  r.setLength(5);
  r.setWidth(3);
  var area = r.calculateArea();
  var peri = r.calculatePerimeter();
  document.getElementById("rectRes").innerText = "Length: 5, Width: 3 -> Area: " + area + ", Perimeter: " + peri;
}
