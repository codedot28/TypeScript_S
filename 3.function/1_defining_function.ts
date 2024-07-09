// Defining Function

function printName(name: string){
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string){
  return `${person1}과 ${person2}는 함께있다.`
}

// console.log(returnTwoCouples())
//현재 이상태에서 에러가 발생하는데 returnTwoCouples()안에 파라미터를 함수를 만들때 타입지정과 함께 했는데, 파라미터를 넣지 않아 ts가 에러를 내고 있는 상태

console.log(returnTwoCouples('김','츄'))
// returnTwoCouples(0,1) // 에러 타입이 잘못되었기에 나타나는 에러

// 1. Optional Parameter

function muliplyOrReturn(x: number, y?:number){
  if(y){
    return x *y
  }else {
    return x
  }
}
console.log(muliplyOrReturn(1)); // 1
console.log(muliplyOrReturn(1,2)); // 3
// 옵셔널이기 때문에, x값은 필수이지만 y값은 필수가 아니게 된다.

function muliplyOrReturn2(x: number, y:number=20){
  return x * y;
}

console.log(muliplyOrReturn2(2)); // 40
console.log(muliplyOrReturn2(3,4)); //12

// 위쪽에 옵셔널 y?부분의 타입은 number | undefined가 되는데 이런식으로 값을 넣게 되면 타입이 number로만 된다. 상황에 맞게 기본값을 아래처럼 넣어도 되고, 위에처럼 옵셔널을 이용하여 하는 방법이 있다.

// ------------------------------------- //

// 2. 나머지 매개변수


function getInfiniteParameters(...args:string[]){
  return args.map((x) => `너무 좋아 ${x}`)
}

console.log(getInfiniteParameters('김','이','츄')) //[ '너무 좋아 김', '너무 좋아 이', '너무 좋아 츄' ]
// console.log(getInfiniteParameters(1,2,3)) // error -> string타입으로만 받기로 했기때문에

// ...args를 넣어 파라미터를 무한적으로 넣을 수 있는 상태이며 스트링 값으로만 넣으면 된다.

// 3. Return Type
function addTwoNumbers(x: number, y: number){
  return x + y;
}

addTwoNumbers(10, 20) 
// 리턴타입을 확인해보면, number로 되어있는것을 확인 할 수 있는데, 파라미터에 타입을 TS가 알아서 유추하여 return타입을 반환해 주는거다.

function randomNumber(){
  return Math.random() > 0.5 ? 10 : '랜덤'
}

randomNumber()
// 리턴타입이 10 | '랜덤'인것을 확인할 수 있는데 이 또한 TS가 유추해준다.


// 직접적인 반환타입명시
function subtractTwoNumbers(x: number, y: number):number{
  return x -y;
  // return '스트링 테스트' // return error발생 
}
// 이런식으로 리턴 타입을 직접적으로 반환하게 할 수도 있다.

// Arrrow function
const subtractTwoNumbersArrow = (x:number, y:number) : number => {
  return x -y
}
// arrow함수도 이런식으로 직접적인 반환이 가능하다.


// 특수변환 타입
// void, never
function doNotReturn(): void{
  console.log('아무것도 반환하지 않는다.')
}

doNotReturn()

// void: 아무것도 없다


function neverEndingLoop(): never{
  while(true){}
}
// 무한루프

function throwError(): never {
  throw Error();
}

// 함수가 끝나지 않는 상태를 만들어줘야 한다.