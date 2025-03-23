/**
 * 数组去重
 * 两个属性相同的对象也认为是重复的
 * @param {Array} arr
 * @returns {Array}
 */

const uniqueArray = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

console.log(uniqueArray([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 0])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(uniqueArray([{a: 1}, {a: 1}, {a: 2}, {a: 2}, {a: 3}, {a: 3}])); // [{a: 1}, {a: 2}, {a: 3}]
