console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size: 1.5em');

// this = myObj
let myObj = {
  id: 2,
  printId(){
    console.log(this.id);
  }
}

myObj.printId();

const sayFoo = function(){
  console.log(this['foo']);
}

// グローバル変数(windowに格納される)
foo = 'foo';

const mySecondObj = {
  foo: "I'm in the obj",
  sayFoo
}

// 実行される場所によってthisの内容が変わる
sayFoo()
mySecondObj.sayFoo()

// instance化されたオブジェクトを参照
function MyObj(id){
  this.id = id;
}

MyObj.prototype.printId = function(id) {
  console.log(this.id);
}

const newInstance = new MyObj(5);

class MyClass {
  constructor(id){
    this.id = id;
  }
  
  printId(id) {
    console.log(this.id);
  }
}

// const newInstance = new MyObj(5);

// func1: this = func1
// func2: this = window
// func3: this = window
const outer = {
  func1: function(){
    console.log(this);

    const func2 = function() {
      console.log(this);

      const func3 = function(){
        console.log(this);
      }();
    }();
  }
}

outer.func1();

// thisを変数に代入することで全てfunc1
const outer2 = {
  func1: function(){
    console.log(this);
    let _that = this;

    const func2 = function() {
      console.log(_that);

      const func3 = function(){
        console.log(_that);
      }();
    }();
  }
}

outer2.func1();