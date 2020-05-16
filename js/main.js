console.log('%c [JavaScript]クロージャーについて学ぼう', 'color:red; font-size: 1.5em');

let counter = 0;
increment(); //1
increment(); //2
increment(); //3

// ダメなパターン
// counterが別の箇所で変更される恐れがある
function increment() {
  counter++;
  console.log(counter);
}

// 即時関数
let increment2 = (function () {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  }
})();
increment2();
increment2();
increment2();

// 変数定義
let increment3 = function countUp(i) {
  let counter = i;
    counter++;
    console.log(counter);
};
increment3(0);
increment3(1);
increment3(2);

// tailにaddStringFactoryの引数が代入される
function addStringFactory(tail) {
// strにaddAsの引数が代入される
  return function(str) {
    return str + tail;
  }
};
let addAs = addStringFactory('AAAAAA');
let addBs = addStringFactory('BBBBBB');
let str2 = 'Tom';
str3 = addAs(str2);
console.log(str3)
