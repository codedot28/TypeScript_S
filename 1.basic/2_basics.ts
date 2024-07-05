// Types

let helloText: string = 'Hello';
// helloText = true;  // 스트링타입 설정으로 boolean타입 x


//js 7개의 타입

const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

// ts에만 존재하는 타입(any, unknown, never)

// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
let anyVar: any;
anyVar = 100;
anyVar = '스트링';
anyVar = true;

// any는 어떤 타입에도 적용할 수 있다
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는타입
let unknownType: unknown;
unknownType = 100;
unknownType = '스트링';
unknownType = true;

// unkown모든 변수에 할당은 가능하지만 다른타입 변수에 할당은 안됨
// let testNumber2: number = unknownType;    
// let testString2: string = unknownType;    
// let testBoolean2: boolean = unknownType;  
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 타입도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;
// let neverType: never = 100;
// let neverType: never = 'test';

// 리스트 타입
const koreaLang: string[] = ['가', '나','다'];
const booleanList: boolean[] =[true, false, false, true];