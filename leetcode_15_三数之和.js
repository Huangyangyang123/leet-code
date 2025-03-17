/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 排序：对数组进行排序，方便使用双指针法。
 * 遍历：使用单循环遍历数组，对每个元素，利用双指针在其后查找两个数的和为当前元素的负值。
 * 双指针法：一个指针从当前元素的下一个位置开始，另一个指针从数组末尾开始，向中间移动。
 * 去重：通过跳过重复元素来避免结果集中出现重复的三元组。
 */
var threeSum = function(nums) {
    const results = [];
    if (nums.length < 3) return results;
    nums.sort((a, b) => a - b);  // 对数组进行排序
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // 跳过重复元素
        // 典型的双指针
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;  // 跳过重复元素
                while (left < right && nums[right] === nums[right - 1]) right--;  // 跳过重复元素
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return results;
};
