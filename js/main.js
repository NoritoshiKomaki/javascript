console.log('%c [JavaScript]タグ付きテンプレートリテラルを使ってみよう', 'color:red; font-size: 1.5em');

let name = 'Tom';
let str = `Hello\n${name}`;
console.log(str);

// タグ付きテンプレートリテラル
function b(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((accu, str, i) => {
    let val = values[i] ? `<b>${values[i]}</b>` : "";
    return `${accu}${str}${val}`
  }, '');
}
const str1 = "Bob";
const str2 = "Tom";
const result = b`${str1} and ${str2}`;
console.log(result);

// joinとreduce
let number = [1, 2, 3, 4, 5];
// joinは文字列として配列を結合する
let join = number.join("");
console.log(join);

// reduceは繰り返し処理で文字列は結合、数値は定義した計算式で計算される
let reduce = number.reduce((prev, current) => {
  return prev * current;
});
console.log(reduce);