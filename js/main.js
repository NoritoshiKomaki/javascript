console.log('%c [JavaScript]オブジェクトとJavaScript4', 'color:red; font-size: 1.5em');

function Person(first, last){
  this.first = first;
  this.last = last;
}

let me = new Person('First', 'Last');

// 1.直代入の関数が最優先される
me.introduce = function(){
  console.log('My name is ' + this.first + ' ' + this.last);
}

// 2.コンストラクタprototypeが二番目に優先される
Person.prototype.introduce = function(){
  console.log('Person ' + this.first + ' ' + this.last);
}

// 3.オブジェクトprototypeが三番目に優先される
Object.prototype.introduce = function(){
  console.log('Object ' + this.first + ' ' + this.last);
}

me.introduce();