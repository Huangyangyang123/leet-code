# leet-code
算法日常
# 一些js第三方库
# 1、动画 GSAP(建议，动画非常多，选择性很多，官网：gsap.com)，Velocity,Animate 都仅限于普通动画

  如果要和滚动条关联，可以用 GSAP+ScrollTrigger
  
# css给图片加阴影 贴图片的那种 
  filter:drop-shadoe(0 0 10px #fff)

# 风骚代码
# 第一段
  1 << 2 // --> 4
  1 << 3 // --> 8
  1 << 4 // --> 16

# 第二段

let toggle = 0
toggle ^= 1; // toggle:1
toggle ^= 1; // toggle:0
toggle ^= 1; // toggle:1

# 解释一下

在 JavaScript 中，^ 是按位异或操作符。规则如下：
0 ^ 0 = 0
1 ^ 0 = 1
0 ^ 1 = 1
1 ^ 1 = 0
即：相同为 0，不同为 1

# 第三段 取整
~~3.14 //3
3.14 >> 0 //3
3.14 << 0 //3
3.14 | 0 //3

# 第四段 判断符号是不是一致
(3 ^ -5) >= 0 //false, 符号不同
(-3 ^ -5) >= 0 //true,符号相同
(3 ^ 5) >= 0 //true,符号相同
(3 ^ -5) >= 0//false,符号不同

# 判断一个数字是不是2的n次幂 如果 n & (n-1) 等于0，n是2的整数幂
const isPowerOf2 = (n) => (n & (n-1)) === 0
isPowerOf2(4) // true
isPowerOf2(15) // false
isPowerOf2(16) //true
isPowerOf2(256) // true
isPowerOf2(250) // false

# 第六段 
//倒序遍历
for(let i=arr.length -1; i>=0;i--){}
//可简写为
for(let i=arr.length;i--; ){}

# 非常简洁的评分组件
//11111代表是心星星 00000代表空心星星
const date (r)=>'1111100000'
rate(0)//00000
rate(1)//10000
rate(2)//11000
rate(3)//11100
rate(4)//11110
rate(5)//11111


