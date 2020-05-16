console.log('%c [JavaScript]アロー関数について学ぼう', 'color:red; font-size: 1.5em');

// 通常の関数定義
function timesTwo(i){
  return i * 2;
}
const res = timesTwo(2);
console.log(res);

// 関数を定数で定義する
const timesTwo2 = function(i){
  return i * 2;
}
const res2 = timesTwo2(2);
console.log(res2)

// アロー関数(1行の場合は{}とreturnを省略可能)
const timesTwo3 = i => i * 2;
const res3 = timesTwo3(2);
console.log(res3)

// 書き方(シンタックス)について
let arrowFn;
arrowFn = () => 42;
arrowFn = x => 42;
arrowFn = (x) => 42;
arrowFn = (x, y) => 42;
arrowFn = (x, y) => {
  console.log(x + y);
  return x + y;
}

// thisのバインドについて
let normalFn;
normalFn = {
  id: 43,
  counter: function() {
    console.log(this.id);

    window.setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
normalFn.counter();

// globalが出力される
window.me = 'global';
const outer = function(){
  let me = 'outer';
  return {
    me: 'inner',
// functionにするとinnerが出力される
    say: () => {
      console.log(this.me);
    }
  }
}
outer().say();