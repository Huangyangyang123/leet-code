/**
 * HJ98-喜欢切数组的红
 * 题目描述
 * 红喜欢切数组，她有一个由n个整数组成的数组A，她想把这个数组切成3个非空子数组A1，A2，A3，
 * 并且满足A1，A2，A3的和相等，同时每个子数组中至少存在一个正数。请问红有多少种不同的切法？ 
 * n(3<=n<=2*10^5)是数组的长度。
 * 每个数组元素A[i]的取值范围是[-10^9,10^9]。
 * 输入描述:
 * 输入包括两行：
 * 第一行包含整数n。
 * 第二行包含n个整数A[i]，以空格分隔。
 * 输出描述:
 * 输出一个整数，表示红的切法数。
 * 示例1
 * 输入
 * 5
 * 0 0 0 0 0
 * 输出
 * 0
 * 示例2
 * 输入
 * 5
 * 0 1 -1 0 0
 * 输出
 * 1
 */
// 数组中的元素量 解法1:O(n^2) 暴力解法结果正确但测试用例过不了 会运行超时
const arrNum = 100;
// 数组元素
const arr = [0,0,1,-1,1,0,1,0,1,-1,0,0,-1,0,-1,1,1,1,0,0,1,-1,1,0,-1,-1,-1,0,-1,0,0,-1,1,-1,0,-1,-1,1,1,0,1,1,-1,0,1,-1,-1,0,0,-1,0,1,1,1,1,0,-1,-1,1,-1,-1,-1,0,-1,1,-1,-1,-1,0,0,-1,1,0,-1,0,1,-1,1,-1,0,-1,0,0,0,0,1,-1,1,1,1,0,0,1,-1,0,1,-1,1,0]

let count = 0;
// 将数组切两刀变成三个非空子数组 （即选两个分割点 i, j）
for(let i=1;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        // 得到三个非空子数组
        const arr1 = arr.slice(0,i);//数组1
        const arr2 = arr.slice(i,j);//数组2
        const arr3 = arr.slice(j);//数组3

        const sum1 = arr1.reduce((a,b)=>a+b,0);
        const sum2 = arr2.reduce((a,b)=>a+b,0);
        const sum3 = arr3.reduce((a,b)=>a+b,0);

        // 每个子数组的和都相等
        if(
            sum1 === sum2 && sum2 === sum3 && 
            arr1.some((x) => x > 0) && arr2.some((x) => x > 0) && arr3.some((x) => x > 0)){
            count = (count || 0) + 1;//每一个子数组中至少存在一个正数
            // dp[j] = Math.max(dp[j], dp[(count || 0) + 1]);
        }
    }
}
console.log(count || 0);


// 解法2 dp 动态规划
const n = arr.length;
// 前缀和
const sum = new Array(n).fill(0);
const pos = new Array(n).fill(0)

// DP 里常见套路：
// 我们先求出 dp[i] = arr[0] + arr[1] + ... + arr[i]

// 这样：
// 任意子数组 [l, r] 的和 = dp[r] - dp[l - 1]
// 子数组求和 O(1) 就能得到

sum[0] = arr[0]//dp 是累加和
pos[0] = arr[0] > 0 ? 1 : 0;//pos 是到当前位置的正数数量。

for (let i = 1; i < n; i++) {
    sum[i] = sum[i - 1] + arr[i];
    pos[i] = pos[i-1] + (arr[i] >0 ? 1 : 0)
}

const total = sum[n-1]

if(total % 3 !== 0){
    console.log(0)
    return
}

const partSum = total / 3;
let res = 0;
// 最大可能的正数个数
const firstCuts = []

// 遍历到倒数第二个（因为最后一段必须非空）
for (let j = 0; j < n - 1; j++) {
    // 第一刀条件：判断是否能切成 partSum即前缀和
    if(sum[j] === partSum && (pos[n-1] - pos[j]) > 0){
        firstCuts.push(j)
    }

    // 第二刀：判断是否能切成 2×partSum，且第三段至少有正数
    if (sum[j] === 2 * partSum && (pos[n-1] - pos[j]) > 0) {
            firstCuts?.forEach((k)=>{
                // 判断第二段是否有正数
                if((pos[j] - pos[k]) > 0){
                    res ++;
                }
            })
    }
}
console.log(res)
