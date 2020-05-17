console.log('%c [JavaScript]ループを使いこなそう2', 'color:red; font-size: 1.5em');

const data = [1, 4, 2, 5, 3];
const fruits = { banana: 2, apple: 3, orange: 1 };

// 引数に取った値を繰り返し処理
data.forEach((value, index, array) => {
  console.log(value, index, array);
});

// 繰り返し処理 + 戻り値を関数外で使用可能
const newData = data.map((value, index, array) => {
  return value * 2;
});
console.log('map');
console.log(data);
console.log(newData);

// map(オブジェクトver)
const newData2 = Object.keys(fruits).map((value, index, array) => {
  return value + 'aaa';
});
console.log('map(object)');
console.log(newData2);

// 配列から条件式に当てはまるものだけ繰り返し処理
const newData3 = data.filter((value, index, array) => {
  return value !== 1;
});
console.log('filter');
console.log(data);
console.log(newData3);

// accuにcurrを足し合わせていく
const newData4 = data.reduce((accu, curr) => {
  return accu + curr;
});
console.log('reduce');
console.log(data);
console.log(newData4);

// 配列をソートすることができる
// data自身もソートされるので注意が必要
const newData5 = data.sort((a, b) => {
  return a - b;
// return b - a;で降順
});
console.log('sort');
console.log(data);
console.log(newData5);

// 組み合わせも可能
const newData6 = data
.map(v => v + 1)
.sort((a, b) => {
  return a - b;
});
console.log('map + sort');
console.log(data);
console.log(newData6);