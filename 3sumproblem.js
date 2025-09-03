// # 3 sum problem on leetcode ======
// two pointer approach
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

let nums=[-1,0,1,2,-1,-4]




var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // skip duplicates

        if (nums[i] > 0) break;  // optimization: no triplet can sum to 0 if the smallest number > 0

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;  // skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;   // need bigger sum
            } else {
                right--;  // need smaller sum
            }
        }
    }

    return res;
};
console.log(threeSum(nums));


// Iterative Approach
var threeSumIterative = function(nums) {
    nums.sort((a, b) => a - b);
    let res = new Set();
    let n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    res.add([nums[i], nums[j], nums[k]].toString());
                }
            }
        }
    }
    return Array.from(res).map(str => str.split(',').map(Number));
}
console.log(threeSumIterative(nums));

// Hashing Approach
var threeSumHashing = function(nums) {
    nums.sort((a, b) => a - b);
    let res = new Set();
    let n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        let seen = new Set();
        for (let j = i + 1; j < n; j++) {
            let complement = - (nums[i] + nums[j]);
            if (seen.has(complement)) {
                res.add([nums[i], nums[j], complement].sort((a, b) => a - b).toString());
            }
            seen.add(nums[j]);
        }
    }
    return Array.from(res).map(str => str.split(',').map(Number));
}   
console.log(threeSumHashing(nums));

// Brute Force Approach 
var threeSumBruteForce = function(nums) {
    let res = new Set();
    let n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    res.add(triplet.toString());
                }
            }
        }
    }

    return Array.from(res).map(str => str.split(',').map(Number));
}
console.log(threeSumBruteForce(nums));