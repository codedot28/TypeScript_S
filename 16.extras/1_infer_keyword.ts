/**
 * Infer Keyword
 * 
 * 유추하다
 * 
 * Inferring Type in Conditional Type
 * 조건부 타입
 * 
 * Infer Keyword는 Conditional Type에서만 사용이 가능한 키워드다.
 * extends 키워드를 사용했을때 extend 한 대상에서 타입을 한 번 더 추론하는 역할을 한다.
 */

// 1. 가장많이 사용하는 예제
// Flattening -> Array를 벗겨낼때
// ex) - string[] -> string
//     - string[][] -> string[]
// type Flatten<Type> = Type extends Array<string> ? string : Type;

// type StringArray = Flatten<string[]>; // type string
// type NumberArray = Flatten<number[]>; // type number[]

// string으로 받는 것을 제외하고 타입의 경우 리스트가 있는 상태로 타입이 반환되는데 이를 해결하기 위해서

type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType : Type; // 위에 코드와 같음

type StringArray = Flatten<string[]>; // type string
type NumberArray = Flatten<number[]>; // type number
type TwoDArray = Flatten<boolean[][]>; // type boolean[]

// 2. return 타입 추론
// type InferReturnType<Type> = Type extends (...args:any[]) => string ? string : Type;

// type NumberArray2 = InferReturnType<number[]>; // type number[]

// type StringFunc = InferReturnType<()=> string>; // type string
// type NumberFunc = InferReturnType<()=> number>; // type () => number
type InferReturnType<Type> = Type extends (...args:any[]) => infer ReturnType ? ReturnType : Type;

type NumberArray2 = InferReturnType<number[]>; // type number[]

type StringFunc = InferReturnType<()=> string>; // type string
type NumberFunc = InferReturnType<()=> number>; // type () => number