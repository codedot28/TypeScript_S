// Return Type
// 함수에서 반환하는 리턴타입을 반환하는 유틸리티

type ReturnTypeSample = ReturnType<()=> number> // type ReturnTypeSample = number 

type FunctionSign = (x:number, y: number) => number; // type FunctionSign = (x: number, y: number) => number

type ReturnType2 = ReturnType<FunctionSign>; // type ReturnType2 = number