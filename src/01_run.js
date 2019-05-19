console.log("this is a test.");

const testVar = "Hello";

let test = function() {
  console.log(testVar);
}

module.exports.testVar = testVar;
module.exports.fn = test;