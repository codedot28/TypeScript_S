// Loopholes of Any (Any의 문제점)

let number: number;
number = 10;

// number.toUpperCase(); // error number에는 toUppserCase를 사용할 수 없기 때문에 에러발생

// (number as any).toUpperCase() // any를 쓰면 마치 실행 할 수 있는 것처럼 보임 -> 컴파일 하고나면 런타임 에러 남

const multiplyTwo = (x:number, y:number) => {
  return x * y;
}

let args1: any = '김';
let args2: any = true;

multiplyTwo(args1, args2); // 에러가 나지 않음
// multiplyTwo('김', true) // error any없이 이런식으로 넣게되면 에러가 나야 정상

// any로 캐스팅을 하는 순간 어떤 함수의 파라미터에든 입력이 가능해진다.
// 그렇기 떄문에 정말 웬만하면 any로 캐스팅하는건 좋지 않다.

let iu:any = {name: '아이유', age:30};
// iu. // 이렇게 하면 원래 name,age 자동완성이 되야 하는데 any는 자동완성이 되지 않음

const callbackRunnser = (x: number, y:number, callback:any) => {
  return callback(x,y);
}

const callback = (x:number, y:number) => {
  return x * y;
}

console.log(callbackRunnser(5, 4, callback)); // 20
// 현재 상태에서는 에러 없이 잘 출력되는데,

// callbakc을 any로 넣은 상태에서 
const callbackRunnsers = (x: number, y:number, callbacks:any) => {
  return callbacks(x,y);
}

const callbacks = (x:number) => {
  return x ;
}

console.log(callbackRunnsers(5, 4, callbacks)); // 5
// 이런식으로 y가 없는 상태가 되었는데 아무런 에러가 나지 않는다.
// y가 없으므로 에러가 나야하는게 정상이지만 그렇지 않음

// any타입을 사용했을때 후에 리팩토링할때 굉장히 위험하다. 어떠한 에러도 받지 못할 가능성이 크기 떄문에,
//TS에서 any를 쓰게되면 js에서 에러확인이 되지 않는 몇몇 문제를 그대로 받게 될 수 있다.