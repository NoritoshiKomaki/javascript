console.log('%c [JavaScript]ループを使いこなそう', 'color:red; font-size: 1.5em');

const data = [1, 4, 2, 5, 3];
const fruits = {banana: 'バナナ', apple: 'リンゴ', orange: 'オレンジ'};

Object.prototype.additionalFn = function(){};

// for(normal) 配列
for(let i = 0; i < data.length; i++){
  console.log(i, data[i]);
}

// for(normal) オブジェクト
let keyFruits = Object.keys(fruits);
for(let i = 0; i < keyFruits.length; i++){
  console.log(i, fruits[keyFruits[i]]);
}

// for(in) 配列
for(let i in data){
// for(in)の場合prototypeを参照するためifで要素を絞る必要がある
  if(data.hasOwnProperty(i)){
    console.log(i, data[i]);
  }
}

// for(in) オブジェクト
for(let i in fruits){
  if(fruits.hasOwnProperty(i)){
    console.log(i, fruits[i]);
  }
}

// for(of) 配列 iでvalueのみを繰り返す
for (let i of data) {
  console.log(i);
}

// for(of) オブジェクト
for (let i of keyFruits) {
// keyを繰り返し処理
  console.log(i);
// valueを繰り返し処理
  console.log(fruits[i]);
}

// ES8から導入されたentries
let Fruits = Object.entries(fruits);
for (let [k, v] of Fruits) {
  console.log(k);
  console.log(v);
}