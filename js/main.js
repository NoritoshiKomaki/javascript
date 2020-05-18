console.log('%c [JavaScript]オブジェクトとJavaScript', 'color:red; font-size: 1.5em');

// オブジェクトにはprototypeが格納されている
let obj = {};
console.log(obj);

let arry = new Array();
console.log(arry);

obj.name = 'Tom';
console.log(obj);

// オブジェクトに配列を入れることができる
obj.arry = ['1', 1];
console.log(obj);

// オブジェクトにオブジェクトを入れることができる
obj.obj = {name: 'John'};
console.log(obj);

// Tomが出力される
console.log(obj.name);
console.log(obj['name']);
let name = 'obj';
// johnが出力される
console.log(obj[name]);
// Tomが出力される
console.log(obj.name);