function argumentsLength() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.length;
}
function reduce(nums, fn, init) {
  for (var i = 0; i < nums.length; i++) {
    console.log(init + nums[i]);
  }
  return 1;
}
// reduce([1, 2, 3, 4], () => 1, 0);
const stringy = function (n) {
  return "10".repeat(Math.ceil(n / 2)).substring(0, n);
};
console.log(stringy(5));
