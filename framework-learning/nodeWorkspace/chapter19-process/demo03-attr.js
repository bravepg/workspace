process.argv.forEach((val, index) => {
  	console.log(`${index}: ${val}`);
});

// node process-args.js one two=three four
// 0: /Users/gaopeng/.nvm/versions/node/v8.10.0/bin/node
// 1: /Users/gaopeng/Documents/classes/autonomous-learning/nodeWorkspace/chapter19-process/demo03-attr.js
// 2: one
// 3: two=three
// 4: four

// console.log(process.argv[0]); // /Users/gaopeng/.nvm/versions/node/v8.10.0/bin/node
// console.log(process.channel);

// console.log(process.env);

console.log(process.pid);
console.log(process.ppid);
console.log(process.versions);
console.log(process.version);