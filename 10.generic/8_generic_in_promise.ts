// Generic in Promise

const afterTwoSeconds = function(){
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve('done')
    },2000)
  })
}

const runner = async function(){
  const res = await afterTwoSeconds(); //  res의 타입이 unknown 
  console.log(res);
}

runner();


const afterOneSeconds = function():Promise<string>{
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve('done')
    },1000)
  })
}

const runner2 = async function(){
  const res = await afterOneSeconds(); //  res의 타입 string으로 변환
  console.log(res);
}

runner2();


// 비동기 프로그래밍을 정의 할때 비동기로 반환을 할거면 Promise타입을 반환해 주고 Promise로 어떤 값을 반환 받을 지는 Promise의 Generic안에 넣으면 실제 어떤 값이 resolve가 되는지 명시가 가능하다.

const runner3 = async function(){
  return 'string return';
}

// async를 붙이면 자동으로 Promise를 유추하게 된다.