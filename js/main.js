console.log('%c [JavaScript]非同期操作について学ぼう3(Await/Async関数)', 'color:red; font-size: 1.5em');

// サーバー取得終了を待たずして加工処理が開始されてしまう

// サーバー取得
// const res = getDataFromServer();
// 取得したデータを加工
// res.doSomething();
// 全く関係ない他の処理
// doSomethingElse();

// ES7 Promiseを分かりやすく記述できる
function wait(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(num);
      if(num === 2){
        reject(num);
      }else{
        resolve(num)
      }
    }, 100);
  });
}

async function init(){
  let num = 0;
  try {
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
  } catch (e) {
    throw new Error('Error is occured', e);
  }
  return num;
}
init();