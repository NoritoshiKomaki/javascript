console.log('%c [JavaScript]非同期操作について学ぼう2(Promise関数)', 'color:red; font-size: 1.5em');

// サーバー取得終了を待たずして加工処理が開始されてしまう

// サーバー取得
// const res = getDataFromServer();
// 取得したデータを加工
// res.doSomething();
// 全く関係ない他の処理
// doSomethingElse();

// rejectはエラーハンドリングで使用
function wait(num){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      resolve(num);
  }, num);
  });
}
wait(0).then(num => {
  num++;
  return wait(200);
}).then(num => {
  num++;
  return wait(201);
}).then(num => {
  num++;
  return wait(202);
}).then(num => {
  num++;
  return wait(203);
});

// 配列の処理が終了したらthenを実行
Promise.all([wait(1000), wait(1200), wait(1400)]).then(nums => {
  console.log(nums);
});