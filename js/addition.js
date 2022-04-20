function addTwoInts (num1, num2) {
  if (parseInt(num1) == NaN || parseInt(num2) == NaN) {
    return null;
  }
  return parseInt(num1) + parseInt(num2);
}

let tester = new UnitTester();
tester.testArray([addTwoInts(1, 2), addTwoInts(3, 4)], [3, 7], "reportingDiv", true);
tester.testArray([0], [1]);
