/**
 * HJ111 气球谜题
 * 对于给定的 n个气球，摆放成一排，颜色仅为红、黄、蓝中的一种。小红想要让颜色相同的气球连续的摆放在一起，为了达成这个目标，她需要将气球重新染色。第i个气球重新染成任意的颜色均需要 
   ​秒，询问需要消耗的最少时间是多少呢
   0,1,2 分别代表初始颜色为红、黄、蓝
 */
const a = '0211011202022202220222220212011021220200112111102211110202022101001221220210121002101010202011212020'.split('').map(Number)

const b = '68 99 12 14 38 23 85 66 17 60 8 56 86 69 48 98 41 46 45 94 26 80 4 29 63 34 2 36 51 49 65 90 45 42 33 71 98 43 56 48 39 49 3 97 12 65 95 30 39 86 85 94 33 56 98 83 53 77 27 35 64 95 90 37 56 70 19 18 5 16 4 61 97 77 74 63 41 59 38 44 38 76 16 16 9 23 11 30 11 33 60 85 70 18 43 62 2 30 13 27'.split(' ').map(Number)

const n = 5//100

const initColous = [0,0,0,0,0]//a//[2, 1, 0, 1, 0, 2]//[0,0,0,0,0]//

const times = [1,2,3,4,5]//b//[1,1,4,5,1,4]//[1,2,3,4,5]// 每种颜色的时间

function permute(arr) {
  if (arr.length <= 1) return [arr];
  return arr.flatMap((v, i) =>
    permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(p => [v, ...p])
  );
}
const permutations = permute([0, 1, 2])


let res = Infinity

const allEqual = initColous.every(v => v === initColous[0])

console.log(allEqual)

if(allEqual){
    console.log(0)
    return
}

//dp[i]代表第i个气球染成颜色j的最小代价  光染色还不行 还要连续相同颜色的气球会有额外代价
for(permutation of permutations) {
    console.log(permutation)
    const [color1, color2, color3] = permutation;

    // 数组解构赋值，把每个子数组的第 1、2、3 个值分别赋给变量
    console.log(color1)//0，0，1，1，2，2
    console.log(color2)//1，2，0，2，0，1
    console.log(color3)//2，1，2，0，1，0

    let dpPrev = [0, Infinity, Infinity]; 
    for (let i = 0; i < initColous.length; i++) {
        let dpCurr = [Infinity,Infinity,Infinity]

        console.log(initColous[i])

        const cost0 = (initColous[i] === color1 ? 0 : times[i]);
        dpCurr[0] = dpPrev[0] + cost0
        

        const minPrev1 = Math.min(dpPrev[0], dpPrev[1]);
        const cost1 = (initColous[i] === color2 ? 0 : times[i]);
        dpCurr[1] = minPrev1 + cost1
        

        const minPrev2 = Math.min(dpPrev[1], dpPrev[2]);
        if(minPrev2 !== Infinity){
            const cost2 = (initColous[i] === color3 ? 0 : times[i]);
            dpCurr[2] = minPrev2 + cost2
        }

        dpPrev = dpCurr
    }
    res = Math.min(res, dpPrev[2])
}

console.log(res) // n是100的时候 预期输出 2274
