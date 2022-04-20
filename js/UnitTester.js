class UnitTester {
  constructor () {
    this.pass = 0;
    this.fail = 0;
  }

  passTest () {
    this.pass += 1;
  }

  failTest () {
    this.fail += 1;
  }

  reset () {
    this.pass = 0;
    this.fail = 0;
  }

  test (testValue, expectedValue, divToAppendTo = "reportDiv", detail = false) {
    if (testValue === expectedValue) {
      this.passTest();
      if (detail) {
        this.printDetail("Test " + testValue + " === " + expectedValue + " passed.", divToAppendTo);
      }
    }
    else {
      this.failTest();
      if (detail) {
        this.printDetail("Test " + testValue + " === " + expectedValue + " failed.", divToAppendTo);
      }
    }
  }

  testArray (testValueArray, expectedValueArray, divToAppendTo = "reportDiv", detail = false) {
    if (testValueArray.length != expectedValueArray.length) {
      console.log("testValueArray length: " + testValueArray.length);
      console.log("expectedValueArray length: " + expectedValueArray.length);
      return;
    }
    for (let i = 0; i < testValueArray.length; i++) {
      this.test(testValueArray[i], expectedValueArray[i], divToAppendTo, detail);
    }
    this.printDetail(this.pass + " tests passed.", divToAppendTo);
    this.printDetail(this.fail + " tests failed.", divToAppendTo);
    this.reset();
  }

  printDetail (detailText, divToAppendTo) {
    if (document.getElementById(divToAppendTo)) {
      let divToAdd = document.createElement("div");
      divToAdd.innerText = detailText;
      document.getElementById(divToAppendTo).appendChild(divToAdd);
    }
  }
}
