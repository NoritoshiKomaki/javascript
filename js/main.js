console.log('%c [JavaScript]分割代入を使いこなそう', 'color:red; font-size: 1.5em');

let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

// スプレット構文で残りの要素をまとめて表示
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

// カンマを連続することで配列のよそをスキップ
[a, , b] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);

// cに初期値を設定
[a, ,b, c=1] = [10, 20, 30]
console.log(a);
console.log(b);
console.log(c);

// ハッシュはキーを引数に渡すことで順番関係なく取得できる
const { b2, a2, ...rest2 } = { a2:10, b2:20, c2:30, d2:40 };
console.log(a2);
console.log(b2);
console.log(rest2);

// コロンでキー名を変更することができる
const { b3: bb, a3: aa, ...rest3 } = { a3:10, b3:20, c3:30, d3:40 };
console.log(aa);
console.log(bb);

// オブジェクトを()で囲むことで定義できる
({ b, a, ...rest} = { a:10, b:20, c:30, d:40 });
console.log(b);
console.log(a);

// 空のオブジェクトを代入することでデフォルト値となる
function drawES2015Chart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
};
// 初期値が表示される
drawES2015Chart();
// 引数で内容を書き換えることでその内容が表示される
drawES2015Chart({
  coords: { x: 18, y: 30},
  radius: 30
});