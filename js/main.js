console.log('%c [JavaScript]オブジェクトとJavaScript2', 'color:red; font-size: 1.5em');

function factoryPerson(first, last){
  let person = {first, last};
  return person;
}
let me = factoryPerson('Komaki', 'Noritoshi');
console.log(me);

// コンストラクター関数は頭文字を大文字にする
function Person(first, last){
  this.first = first;
  this.last = last;
}
let me2 = new Person('小牧', '功知')
console.log(me2);
