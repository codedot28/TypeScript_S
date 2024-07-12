// Property Check (초과속성 검사)
// 

type TName = {
  name: string;
}

type TAge ={
  age: number;
}

const k = {
  name: '김',
  age: 33
}

// const k2:TName = {
//   name: '김',
//   age: 33 //error
// }
// 이런식으로 넣게 되면 age에 오류가 나고, 

// const k1:TAge = {
//   name: '김', //error
//   age: 33
// }
// 이건 name에 오류가 발생하는데

const testName: TName = k;
const testAge: TAge = k;

// 이미 선언이 되어 있는 객체의 변수를 다른 변수에 옮겨 넣을 때는 TS 가 객체의 타입을 보기 때문에 할당이 가능하게 된다.