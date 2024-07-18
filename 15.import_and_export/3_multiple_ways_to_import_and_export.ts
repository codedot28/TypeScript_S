// Multiple ways to Import and Export

// import { IdolModel as Im, k, number, ICat } from "./2_export_1";
// // import한 명칭을 변경 할수 있는데 명칭 뒤에 as를 붙이고 바꾸고 싶은 이름을 넣으면 된다.

// console.log(new Im('츄', 2)); // IdolModel { name: '츄', age: 2 }
// // console.log(new IdolModel('츄', 2)); // error IdolModel은 더이상 존재하지 않는 값이기에 error

// 와일드카드
// import * as allTogeter from './2_export_1'

// console.log(allTogeter.number); // 9999
// // *와일드카드를 쓰게 되면 export들이 하나로 객체처럼 묶여 .점을 써서 원하는 값을 불러 올 수 있다.

// //export default와 export 함께 가져오기
import cf, {number, k} from './2_export_1'

console.log(cf); // { name: '코드닷', age: 33 }
console.log(number); // 9999
console.log(k); // IdolModel { name: 'k', age: 33 }

// 프로젝트의 root경로로 부터 따오는 방법
// tsconfig.json파일에 "baseUrl": "./" 이 주석으로 되어 있는데 이 부분을 풀어주면 경로가 최상위 root경로로 부터 시작하게 된다.



