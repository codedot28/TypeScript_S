// never

//1) 함수에서 에러를 던질때
function throwError(): never {
  throw Error();
}

//2) 무한루프
function infiniteLoop():never {
  while(true){}
}

//3) 존재 할 수 없는 인터섹션
type StringAndNumber = string & number;

// let neverType: never = 10;  //error
// let neverType: never = undefined; //error
// let neverType: never = null;//error

// 어떤 값을 넣어도 안됨
// never는 일어날 수 없는 상황이다라고 이해하면 됨