<?php
class UnitTester {
  private int $testPass = 0;
  private int $testFail = 0;

  public function __construct () {
    $this->testPass = 0;
    $this->testFail = 0;
  }

  private function passTest () {
    $this->testPass += 1;
  }

  private function failTest () {
    $this->testFail += 1;
  }

  private function reset () {
    $this->testPass = 0;
    $this->testFail = 0;
  }

  public function test ($testValue, $expectedValue, $detail = false) {
    if ($testValue === $expectedValue) {
      $this->passTest();
      if ($detail) {
        echo("Test " . $testValue . " === " . $expectedValue . " passed. \u{2713}\n");
      }
    }
    else {
      $this->failTest();
      if ($detail) {
        echo("Test " . $testValue . " === " . $expectedValue . " failed. \u{274c}\n");
      }
    }
  }

  public function testArray ($testValueArray, $expectedValueArray, $detail = false) {
    if (count($testValueArray) != count($expectedValueArray)) {
      echo("testValueArray length: " . count($testValueArray) . "\n");
      echo("expectedValueArray length: " . count($expectedValueArray) . "\n");
      return;
    }
    for ($i = 0; $i < count($testValueArray); $i++) {
      $this->test($testValueArray[$i], $expectedValueArray[$i], $detail);
    }
    echo($this->testPass . " tests passed. \u{2713}\n");
    echo($this->testFail . " tests failed. \u{274c}\n");
    $this->reset();
  }
}
?>
