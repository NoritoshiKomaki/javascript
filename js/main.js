console.log('%c [JavaScript]スプレット構文を使いこなそう', 'color:red; font-size: 1.5em');

function sum(x, y, z) {
  return x + y + z;
}
let num = sum(1, 2, 3);
console.log(num)

// スプレット構文で配列を引数に代入
const numbers = [1, 2, 3];
// sum.apply(null, numbers);と同義
let num2 = sum(...numbers);
console.log(num2);

// スプレット構文で配列を結合
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
// concatで結合
arr3 = arr1.concat(arr2);
// スプレット構文で結合
arr4 = [...arr2, ...arr1];
// 間に数値を追加できる
arr5 = [...arr2, 10, ...arr1];

let obj1 = { foo: 'bar', x:42 };
let obj2 = { foo: 'baz', y:13 };
let clonedObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };
console.log(clonedObj);
// 結合要素のキーが同じ場合後者が優先される
console.log(mergedObj);

let a = [[1], [2], [3]];
let b = [...a];
// 2段階でaにも影響を及ぼす
b.shift().shift();
console.log(a);
console.log(b);

// Rest Parameters
function sum(...theArgs) {
// reduceは配列の中身を足し合わせる
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
let sum2 = sum(1, 2, 3);
console.log(sum2);

// 以下の２つの関数は結果が同じ
// 定義したa以外の残りを取得するのでRest Parameters
function f(a) {
  let args = Array.prototype.slice.call(arguments, f.length);
  console.log(a);
  console.log(args);
}
f(1, 2, 3)

function g(a, ...args) {
  console.log(a);
  console.log(args);
}
g(1 ,2, 3)

