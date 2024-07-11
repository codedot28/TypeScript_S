// Type VS Interface

// Object 선언

interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x:number;
  y:number;
}

// function 선언
interface IFunction {
  (x:number, y:number): number;
}

type TFunction = (x:number, y:number) => number;

// Type에서는 가능하지만, Interface 에서는 불가능한 것

// 1)primitive 타입 선언하기
// Interface 애초에 객체형태로 선언하기 떄문에 불가
type Name = string;

// 2)유니언 타입 선언 하기
type UnionType = string | number;

//3)primitive list 또는 tuple타입 선언하기
// 직접적으로 Array타입으로 선언하는게 interface는 불
type TupleType = [number, string];

// Interface는 가능하지만, Type는 불가능한 것

//1)interface merging(합치다)
// 똑같은 이름에 프로퍼티를 서로 다르게 선언했을 경우
interface IRectangle{
  height:number;
}

interface IRectangle{
  width: number;
}

let iRectangle: IRectangle = {
  height: 100,
  width: 200
}

// 위에서 선언한 프로퍼티가 모두 들어와야 에러 없이 잘 출력되는 것을 확인 할 수 있다.
// 즉, interface는 중복선언했을때 모두 합쳐진

// type TRectangle = {
//   height: number;
// }
// type TRectangle = {
//   width: number;
// }

// Type은 중복된 이름으로 선언했을때 이미 에러부터 발생하게됨


//2)Interface Merging
class Review {
  //프로퍼티: instance에 귀속되는 값
  getY = (x:number) => {return x};

  //메서드: 메서드는 프로토타입에 귀속되고,
  getX(x:number){
    return x;
  }
}

interface GetXnY {
  getX:(x: number) => number;
  getY:(y: number) => number;
}

// interface GetXnY {
//   getX:(x: number) => number;
//   getY:(y: string) => number; // 선언자체 성립이 되지 않음
// }

// 메서드 선언시 가능

interface GetXnY2 {
 getX(x:number):number;
 getY(y:number):number;
}

interface GetXnY2 {
 getX(x:number):number;
 getY(y:string):number;
}

// const testMethod: GetXnY2 = {
//   getX(x){
//     return x;
//   },
//   getY(y){    //y의 타입은 string|number;
//     return y; //리턴타입이 number이기에, 에러가 발생함
//   }
// }