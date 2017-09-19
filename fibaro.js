const fib = function fib() {
  let term0 = 0;
  let term1 = 1;
  let result = [];
  for (let i = 0; i < 100; ++i) {
    result.push(term0);
    const temp = term0 + term1;
    term0 = term1;
    term1 = temp;
  }
  return result;
};

//console.log(fib());

////////////////////////////////////////////////////////////////////////////////

const numToStrings = function numToStrings(list) {
  return _.map(list, item => item.toString());
};

console.log(numToStrings(fib()));

const numEvenNums = function numEvenNums(list) {
   return _.filter(list, function(item) { return item % 2 === 0; }).length;
};

console.log(numEvenNums(fib()));
