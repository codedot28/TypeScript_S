// Tuple
// JS에 존재하지 않는 개념


// Tuple은 예를 들어 Array에서 타입 지정시 첫번째는 number, 두번째는 string을 넣을거다 라고 지정하면 값은 타입과 같이 넣어야 한다.
let numberAndStringTuple: [number, string] =[
  33,
  '김'
]
// 만약 첫번째에 string이 들어가고 두번째에 number가 들어가면 에러 발생, 순서대로 넣어야 함

// 순서를 강제한다.

numberAndStringTuple.push('이');
console.log(numberAndStringTuple);// [ 33, '김', '이' ]
// [number, string]두개의 타입만 지정하고 2개의 값만을 정했는데 push하면 값이 들어가는 상태가 생기기도 한다. 이를 방지하기 위해

let unmodifableTuple:readonly [number, string] = [
  33,
  '김'
]

// unmodifableTuple.push() // error 
// readonly를 통해 push를 막아줄 수 있다.
// Tuple을 정확하게 사용하려면 readOnly를 사용하면 된다!

// Tuple유추

// 일발적인 유추
let family = ['김','이','츄']; //string[]로 유추 

//Tuple 유추
let familyTuple=['김','이','츄']as const; // type readonly ["김", "이", "츄"]
const familyTupleConst=['김','이','츄']as const; // type readonly ["김", "이", "츄"]
// as const(정확한 타입으로 유추)로 캐스팅을 하게 되면 Tuple 유추가 가능하게 되고 type readonly ["김", "이", "츄"] 이런식으로 된다.

// spread
let stringArray: string[] = [
  ...familyTuple,
  ...familyTupleConst,
  // ...[1,2,3], //error 숫자는 입력할 수 없게 했기 때문에 
  ...['스','트','링']
]

// Named Tuple
// 타입에 이름을 넣을 수 있는데
const namedTuple :[name:string, age:number] =['김', 33]; // type [name: string, age: number]
// 타입 선언시 애매한데, 정확히 어떤 포지션에 어떤 타입이 들어갈지 대략적으로 알고 있는 상태에서 튜플을 만들기 때문에 이런식으로 이름을 지어줄 수 있다.

//Assigning Tuple to Tuple(튜플에 튜플 할당하기)
// 튜플은 같은 타입끼리만 할당이 가능하다.

const tuple1: [string, string] = ['김','이'];
const tuple2: [number, number] = [1, 2];

// let Tuple3: [boolean, boolean] = tuple1; // error
// let Tuple4: [number, number, number] = tuple2; // error

let tuple5: [number, number] = tuple2

// Tuple과 Array의 관계
let fluit: [string, string] = [
  '사과',
  '딸기'
];

let stringArr: string[] = fluit;
// let fluit2: [string, string] = stringArr; //error
// 구체적인 타입(let fluit2: [string, string])에서 덜 구체적인 타입(stringArr)으로는 불가
// stringArr 이곳에서 string[]구성된 리스트 스트링이 한개만 있을수도 있고 두개 이상일 수도 있어 재 할당은 불가하다.

// Multi Dimensional Tuple

const tuple2D: [string, number][] = [
  ['김',33],
  ['이',33],
  ['츄',2],
]