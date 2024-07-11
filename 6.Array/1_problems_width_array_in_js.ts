// Problems with Array in Js(어레이의 문제)
// array에 그냥 아무거나 넣을 수 있다는게 문제

let string :string[] = ['1','2','3','4'];

// string.push(1) // error string타입만 넣을 수 있기때문에

// stirng과 number를 동시에 넣으려면 유니언으로 지정해서 넣음
let stringOrNumbersArray:(string | number)[] =['1', 2, '3',4]


let stringArrNumberArr: string[] | number[] =[1,2,3,4] // number[]
stringArrNumberArr =['1','2','3','4'] // string[]

let stringOrNumberArr: string | number []= [ 1,2,3] // number[]
stringOrNumberArr = '3' // string

let boolsArr = [true, false, true] // type boolean[]
// 타입 지정없이 유추 가능 []안에 boolean값을 나열했기에

boolsArr.push(true) // 가능
// boolsArr.push(1) // error type error

const onlyString = ['1','2','3','4'];
const onlyNumbers = [1,2,3];

for(let i = 0; i < onlyString.length; i++){
  let item = onlyString[i] //type string
}

for(let item of onlyNumbers){ //type number

}

let number3 = onlyNumbers[0]; // type number
let number4 = onlyNumbers[9999] //type number
// number4의 경우 존재하지 않는 9999이지만 에러를 발생하지 않고 타입도 정상적으로 나온다 이런 부분에서는 버그가 나올 수 있기에 조심하면서 쓸 필요가 있다.