// Generic in Interface

interface Cache<T>{
  data:T[];
  lastUpdate: Date;
}

// 제네릭 선언
const cache1:Cache<string> = {
  data:['data1','data2'],
  lastUpdate: new Date(),
}

// 유추
//  const chche2:Cache= {
//   data:[123,456],
//   lastUpdate: new Date(),
//  } // error: Cache<T>제네릭을 넣어달라는 에러가 발생하게된다.

 const chche3:Cache<number>= {
  data:[123,456],
  lastUpdate: new Date(),
 }
 // Cache에서 제네릭을 이미 선언했기에 유추는 불가하고 알맞은 제네릭 타입을 넣어줘야 한다.

 // 제네릭타입 지정
 interface DefaultGeneric<T= string>{
  data:T[];
 }

//  const cache4: DefaultGeneric = {
//   data: [123,456];
//  }// error string값이 들어가야함
