// 基数排序
// 时间复杂度O(n)
const Queue = require('./main');

const queues = [];
for (let i = 0; i < 10; i++) {
  queues[i] = new Queue();
}

function distribute(nums, queues, digit) {
  for (let i = 0; i< nums.length; i++) {
    if (digit == 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}

function collect(nums) {
  let index = 0;
  for (let i = 0; i< nums.length; i++) {
    while(!queues[i].empty()) {
      nums[index++] = queues[i].dequeue();
    }
  }
}

const nums = [];
for (let i = 0; i< 10; i++) {
  nums[i] = Math.floor(Math.random() * 100);
}

console.log(nums);
distribute(nums, queues, 1);
collect(nums);
distribute(nums, queues, 10);
collect(nums);
console.log(nums);
