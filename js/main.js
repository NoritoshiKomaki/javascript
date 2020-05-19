console.log('%c [JavaScript]ES2019 Classの使い方', 'color:red; font-size: 1.5em');

// 変数や関数を外部で変更できてしまう
document.addEventListener('DOMContentLoaded', () => {
  const es = new ES2015();
  es.printVersion();
});

class ES2015 {
  constructor() {
    this._version = 2015;
  }
  _increment() {
    this._version++;
  }
  printVersion() {
    console.log(`%c Hi, my version is %c${this._version}`, 'font-size: 1.5em; color:red;', 'font-size: 1.5em; color:green;')
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const es = new ES2019();
  es.printVersion();
});

class ES2019 {
// thisとconstructorを省略することができる
// 頭文字に#を付けることでプライベート変数になる
  #version = 2019;
  increment() {
    this.#version++;
  }
  printVersion() {
    this.increment();
    console.log(`%c Hi, my version is %c${this.#version}`, 'font-size: 1.5em; color:red;', 'font-size: 1.5em; color:green;')
  }
}