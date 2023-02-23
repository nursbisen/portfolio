const A = [2, 3];
const B = [5, 12];

Array.prototype.plus = function (array) {
  return [this[0] + array[0], this[1] + array[1]];
};

Array.prototype.minus = function (array) {
  return [this[0] - array[1], this[1] - array[0]];
};

Array.prototype.multipliedBy = function (array) {
  const merge = [this[0]*array[0], this[0]*array[1], this[1]*array[0], this[1]*array[1]];

  return [Math.min(...merge), Math.max(...merge)];
};

Array.prototype.dividedBy = function (array) {
  const divideByOne = array.map((num) => 1 / num);

  return this.multipliedBy(divideByOne);
};

console.log(A.plus(B));
console.log(A.minus(B));
console.log(A.multipliedBy(B));
console.log(A.dividedBy(B));
