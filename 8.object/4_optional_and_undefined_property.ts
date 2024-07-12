// Optional vs Undefined 프로퍼티
interface Dog {
  name: string;
  age: number;
  //종을 모르면 undefined
  breed?: string;
}

const chue: Dog = {
  name: '츄',
  age: 2,
  breed: '말티츄'
}

const oir: Dog ={
  name: '오리',
  age: 2,
}

// 이상태에서 breed는 string | undefined로 나오는데 실제로 undefined로 타입을 선언하는 것과 어떠한 부분이 다른가?


interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}

const cat:Cat = {
  name: '나비',
  age: 3,
  breed: undefined
}

// optional의 경우 없어도 되는 경우가 존재한다면 사용하는 게 맞으나 이런식으로 undefined를 직접 넣게 되면 값을 undefined라도 넣어야 에러를 발생하지 않기 때문에 optional과 undefined는 차이가 있다는 것을 알 수 있다.