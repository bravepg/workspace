const arr = [8, 2, 7, 5, 6];

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // let min = arr[i];
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        // min = arr[j];
        // arr[j] = arr[i];
        // arr[i] = min;
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
}

selectSort(arr);

console.log('arr', arr);