/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // if(n == 1 || n == 0) return n
    // return fib(n-1) + fib(n-2)

    //优化后的版本 记录一个缓存 避免重复查询
    let cache = []
    for(let i=0;i<=n;i++){
        console.log('cache[i]:',i)
        if(i<=1){
            cache[i] = i
        }else{
            cache[i] = cache[i-1]+cache[i-2]
        }
    }
    //前面两个相加 等于当前n的值
    console.log('cache:',cache)
    return cache[n]
};
