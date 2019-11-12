let number  = 100;

async function run(thread, obj) {
  for (let i = 0; i < number; i++) {
    number--;
    await new Promise(resolve => setTimeout(resolve, thread));
    obj.count++;
    console.log(`thread----${thread}`, obj, number);
  }
}

run(1000, {
  count: 0,
});
run(2000, {
  count: 0,
});
run(3000, {
  count: 0,
});
