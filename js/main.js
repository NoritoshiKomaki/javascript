console.log('%c [JavaScript]非同期操作について学ぼう1(コールバック関数)', 'color:red; font-size: 1.5em');

// サーバー取得終了を待たずして加工処理が開始されてしまう

// サーバー取得
// const res = getDataFromServer();
// 取得したデータを加工
// res.doSomething();
// 全く関係ない他の処理
// doSomethingElse();

// callbackを使うことで連続して処理を実行できるが、記述が複雑になってしまう
function wait(callback, num){
  setTimeout(() => {
    console.log(num);
    callback(num);
  }, 300);
}

wait(() => {
  console.log('callback function is called');
}, 0);

// 連続処理
wait(num => {
  num++;
  wait(num => {
    num++;
    wait(num => {
      num++;
    }, num);
  }, num);
}, 0)