"use strict";
// Types
let helloText = 'Hello';
// helloText = true;  // 스트링타입 설정으로 boolean타입 x
//js 7개의 타입
const stringVar = 'String';
const numberVar = 3;
const bigIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
// ts에만 존재하는 타입(any, unknown, never)
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
let anyVar;
anyVar = 100;
anyVar = '스트링';
anyVar = true;
// any는 어떤 타입에도 적용할 수 있다
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는타입
let unknownType;
unknownType = 100;
unknownType = '스트링';
unknownType = true;
// unkown모든 변수에 할당은 가능하지만 다른타입 변수에 할당은 안됨
// let testNumber2: number = unknownType;    
// let testString2: string = unknownType;    
// let testBoolean2: boolean = unknownType;  
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never - 어떠한 타입도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;
// let neverType: never = 100;
// let neverType: never = 'test';
// 리스트 타입
const koreaLang = ['ㄱ', 'ㄴ', 'ㄷ'];
const booleanList = [true, false, false, true];
