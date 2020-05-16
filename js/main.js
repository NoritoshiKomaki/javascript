console.log('%c [JavaScript]call,apply,bindの使い方', 'color:red; font-size: 1.5em');

// call関数で引数を渡すことでthisに代入される
function greet(){
  let hi = `Hi, ${this.name}`;
  console.log(hi);
}
let obj = {name: 'Tom'};
greet.call(obj);

// callの第二引数以降はargumentsに格納される
// sliceを使用することで配列で取得可能
function greet2(){
  let slicedArray = [].slice.call(arguments,0,1);
  console.log(slicedArray);
}
greet2.call(obj,1,2,3);

// applyは第二引数に関数を渡す
function greet3(id1, id2, id3){
  console.log(id1, id2, id3)
  let hello = `Hello, ${this.name}`
  console.log(hello);
}
greet3.apply(obj,[1,2,3]);

// minで最小値を取得する際に使用できる
const arry = [1,2,3,4];
console.log(
  Math.min.apply(null, arry)
);

// setTimeoutの構造
// window {
//   setTimeout: function(callBack, milliSecond){
//     stop milliSecond
//     callBack();
//   }
// }

// setTimeoutはwindowに格納されている
// bindを使用することでthis = window→myObjに変更
let myObj = {
  id: 42,
  print() {
    setTimeout(function () {
      console.log(this.id);
    }.bind(this), 1000);
  }
}
myObj.print();

// アロー関数を使用するとwindowは無視される
let myObj2 = {
  id: 42,
  print() {
    setTimeout( () => {
      console.log(this.id);
    }, 1000);
  }
}
myObj2.print();
