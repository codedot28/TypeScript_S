// 캐스팅
// *TS에서 Casting을 하면 JS에서는 적용이 안된다. (JS에서는 존재하지 않는다)*
// 타입이 지정되어 있더라도 캐스팅을 사용하게 되면 강제로 타입을 변경할 수 있다.
//그러나 JS에는 Casting이 존재하지 않기에 초기에 선언했던 형태의 타입을 반환하게 된다.


const codedot = 'codedot';
const testNumber = 9;

console.log(codedot.toUpperCase()); //CODEDOT
// console.log(testNumber.toUpperCase()); // number타입이기에 애러 발생

let sampleNumber : any = 5;
console.log(sampleNumber.toUpperCase()); // any타입의 문제인데 분명 애러가 발생해야하지만 그렇지 않음
let stringVar = (sampleNumber as string); // number타입인데 string으로 변환되는 상황이 발생된다.

console.log(typeof(sampleNumber as string)); // number로 됨 이유는 JS는 캐스팅의 영향을 받지 않기에 초기에 선언된 5의 타입을 가져오는 것

// 즉 캐스팅을 사용할 때는 상속상에서 좀더 구체화 값을 정할때 사용하게됨