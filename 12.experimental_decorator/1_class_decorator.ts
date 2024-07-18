// Class Decorator

// @Test 이 데코레이터는 아래 TEST함수이다.
// 클래스 위에 @데코레이터를 작성하면 파라미터로 데코레이팅 한 대상 클래스를 받아 볼 수 있다.
@Test
@Frozen
@LogTest('PROD')
@ChangeClass
class Idol {
  name: string;
  age:number;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
}

function Test(constructor:Function){
  console.log(constructor); // [class Idol]
}

function Frozen(constructor:Function){
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const chue = new Idol('츄', 2);

console.log(Object.isFrozen(Object.getPrototypeOf(chue))); //true
// chue의 프로토타입이 freeze(얼어있냐)되어 있냐라고 물어보는 log
// true의 이유는 Frozen함수를 @Frozen데코레이팅 했기때문에 함수실행이 되었다.

// 현재는 데코레이터를 쓰는 경우는 패키지나 플러그인 또는 라이브러리에서 제공해주는 것을 쓰는 경우가 훨씬 많다.

/**
 * decorator factory
 * 데코레이팅 함수가 실행될 때 파라미터를 넘겨주고 싶은 경우.
*/
function LogTest(env:string){
  return function(constructor:Function){
    console.log(`[${env}] ${constructor}가 실행됐습니다.`);
  }
}
// [PROD] class Idol {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }
// }가 실행됐습니다.

console.log('--------------------');

const k = new Idol('김', 33);
console.log(k);


// 클래스에 데코레이터를 적용하게 되면 클래스의 선언이 실행 될 때 딱 한번 컴퓨터가 클래스의 선언을 읽을 때 딱 한 번만 실행이 된다.

// 데코레이팅한 클래스 변경
// 파라미터에 선언할 construncor는 new를 사용하여 instance화 할 수 있는 constructor다 라고 타입을 명시
function ChangeClass<T extends { new(...args:any[]):{}}>(constructor: T){
  return class extends constructor{
    groupName = '츄';

    constructor(...params: any[]){
      super(...params);

      console.log('constructor instaniated');
    }
  }
}