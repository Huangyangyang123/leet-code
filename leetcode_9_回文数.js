/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
    // x = 121 true
    if(x<0) return false
    if(x == 0) return true
    if(x%10 == 0) return false
    let reverseNum = 0
    while(x > reverseNum){
        reverseNum = reverseNum * 10 + x % 10
        x = Math.floor(x / 10)
    }
    return x === reverseNum || x === Math.floor(reverseNum / 10)
};
