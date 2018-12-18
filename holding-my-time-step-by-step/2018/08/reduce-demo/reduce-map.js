// 利用 reduce 代替 map 和 filter
// [10, 20, 30, 40] 中每项乘以2后，取出大于50的项
const numbers = [10, 20, 30, 40];

const mapFilterDoubledOver50 = numbers.map(item => item * 2).filter(item => item > 50);

const reduceDoubledOver50 = numbers.reduce((finalList, num) => {
	num = num * 2;
	if (num > 50) finalList.push(num);
	return finalList;
}, []);



// 统计数组中相同项的个数
var cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
var commonCarsObj = {};
commonCarsObj.forEach((item) => {
	if (carsObj[item]) {
		carsObj[item]++;
	} else {
		carsObj[item] = 1;
	}
});
var reduceCarsObj = cars.reduce(function (obj, name) {
  obj[name] = obj[name] ? ++obj[name] : 1;
  return obj;
}, {});

// 将数组平铺到指定深度
const flatten = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), []);

// 利用yield
function* iterTree(tree) {
  	if (Array.isArray(tree)) {
  		for (let i=0; i < tree.length; i++) {
	     	yield* iterTree(tree[i]);
	    }
  	} else {
    	yield tree;
  	}
}	
