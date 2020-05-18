console.log('%c [JavaScript]オブジェクトとJavaScript5', 'color:red; font-size: 1.5em');

function Person(first, last){
  this.first = first;
  this.last = last;
}

// callメソッドでPersonのthisと一致させる
function Japanese(first, last){
  Person.call(this, first, last);
  this.lang = 'ja';
}

// プロトタイプを継承する
Object.setPrototypeOf(Japanese.prototype, Person.prototype)

Person.prototype.introduce = function(){
  console.log('Person ' + this.first + ' ' + this.last);
}

Japanese.prototype.sayJapanese = function(){
  console.log('こんにちは ' + this.first + ' ' + this.last);
}

let me = new Japanese('First', 'Last');
// 継承したことでintroduceを使用可能
me.introduce();
me.sayJapanese();