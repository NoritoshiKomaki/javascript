console.log('%c [JavaScript]オブジェクトとJavaScript6', 'color:red; font-size: 1.5em');

class Person {
  constructor(first, last){
    this.first = first;
    this.last = last;
  }
  introduce(){
    console.log('Person ' + this.first + ' ' + this.last);
  };
}

class Japanese extends Person {
  constructor(first, last) {
    super(first, last);
    this.lang = 'ja';
// _を付けることでプライベート変数を明示する
    this._age = 0;
  }
  introduce(){
    console.log('こんにちは ' + this.first + ' ' + this.last);
  };
// newを使わず呼び出すことができる
// thisは使用できない
  static sayHello(value){
    console.log('こんにちは ' + value)
  }
// セッター
  set age(value) {
    this._age = value;
  }
// ゲッター
  get age() {
    return this._age
  }
}

let me = new Person('Noritoshi', 'Komaki');
me.introduce();

let me2 = new Japanese('小牧', '功知');
me2.introduce();

Japanese.sayHello('小牧');

console.log(me2.age);
me2.age = 10;
console.log(me2.age);
