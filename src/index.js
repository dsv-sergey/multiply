module.exports = function multiply(first, second) {
  let first_arr = first.split("").reverse(),
    second_arr = second.split("").reverse(),
    stack = [];
  for (let i = 0; i < first_arr.length; i++) {
    for (let j = 0; j < second_arr.length; j++) {
      let mul = first_arr[i] * second_arr[j];
      stack[i + j] = stack[i + j] ? stack[i + j] + mul : mul;
    }
  }
  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10,
      up = Math.floor(stack[i] / 10);
    stack[i] = num;
    if (stack[i + 1]) stack[i + 1] += up;
    else if (up != 0) stack[i + 1] = up;
  }
  return stack.reverse().join("");
};
