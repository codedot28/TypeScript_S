// Exclude Type
// 유니언 타입을 넣어주면 된다.

// 세 가지 타입이 있고 이중에 제외하고 싶은 타입을 두 번째 값에 넣어주면 제외된다.
type NoString = Exclude<string | boolean |number, string> //type NoString = number | boolean


// 함수도 제외 할 수 있다.
type NoFunction = Exclude<string | (()=> void), Function>; //type NoFunction = string