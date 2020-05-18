console.log('%c [JavaScript]オブジェクトとJavaScript3', 'color:red; font-size: 1.5em');

function Person(first, last){
  this.first = first;
  this.last = last;
  // this.introduce = function(){
  //   console.log('My name is ' + first + ' ' + last);
  // }
}

// prototypeではthisを記述する必要がある
Person.prototype.introduce = function(){
  console.log('My name is ' + this.first + ' ' + this.last);
}

let me = new Person('First', 'Last');
let me2 = new Person('Me2', 'Desu');
// meのみ関数を書き換えることができる
// me.introduce = function() {
//   console.log("I don't want to introduce myself");
// }

// 関数をまとめて書き換えることができる
// インスタンス化すると__proto__と記述する
me.__proto__.introduce = function() {
  console.log("I don't want to introduce myself");
}
me.introduce();
me2.introduce();
