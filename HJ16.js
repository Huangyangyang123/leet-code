/**
* HJ16 购物单
*/
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

//牛客 node.js获取参数  https://www.nowcoder.com/exam/oj/ta?difficulty=3&page=1&pageSize=50&search=&tpId=37&type=37
const lines = [];
  while (true) {
    const line = await readline();
    if (line === undefined) break;
    const t = line.trim();
    if (t.length === 0) continue;
    lines.push(t);
  }

  const currentItem = lines.map(line => line.trim().split(/\s+/).map(Number));


  const currentItem = [
        [1000,5],
        [800, 2, 0],
        [400, 5, 1],
        [300, 5, 1],
        [400, 3, 0],
        [500, 2, 0],
    ];

     // 分开主件和附件
    const allItems = [];

    let totalMoney
    let m

    currentItem?.forEach((items) => {
        if(items.length == 2){
            totalMoney = items[0]
            m = items[1]
        }else{
            allItems.push({v: items[0], p: items[1], q: items[2]})
        }
    });

    console.log(m)

    console.log(allItems)

    // 将主件和附件分类
    const mains = {}; // id -> {v, p, attaches: []}
    for (let idx = 0; idx < m; idx++) {
        const id = idx + 1;
        const it = allItems[idx];
        if (it.q === 0) {
            mains[id] = { v: it.v, p: it.p, attaches: [] };
        }
    }

    console.log(mains)

    for(let idx=0;idx<m;idx++){
        const id = idx + 1;
        const it = allItems[idx];
        if(it.q !== 0 && mains[it.q]){
            mains[it.q].attaches.push({v: it.v, p: it.p})
        }
    }

    // dp 背包

    const dp = new Array(totalMoney + 1).fill(0);
    console.log(dp)

    for(const key of Object.keys(mains)){
        const main = mains[key];
        const baseV = main.v;
        const baseVal = main.v * main.p;
        const attach = main.attaches;
        const costs = [];
        const vals = [];
        // 仅主件
        costs.push(baseV);
        vals.push(baseVal);
        if (attach.length >= 1) {
            // 主件 + 附件1
            costs.push(baseV + attach[0].v);
            vals.push(baseVal + attach[0].v * attach[0].p);
        }
        if (attach.length >= 2) {
        // 主件 + 附件2
        costs.push(baseV + attach[1].v);
        vals.push(baseVal + attach[1].v * attach[1].p);
        // 主件 + 附件1 + 附件2
        costs.push(baseV + attach[0].v + attach[1].v);
        vals.push(baseVal + attach[0].v * attach[0].p + attach[1].v * attach[1].p);
        }

        for(let j = totalMoney; j >= 0; j--){
            for(let k = 0; k < costs.length; k++){
                if (j >= costs[k]) {
                    dp[j] = Math.max(dp[j], dp[j - costs[k]] + vals[k]);
                }
            }
        }

    }

    console.log(dp[totalMoney]);
