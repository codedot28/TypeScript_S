// import

// import IdolModel from './1_export_default_1';


// const k = new IdolModel('츄', 2);
// console.log(k); // Idol { name: '츄', age: 2 }

// import number from './1_export_default_1';

// const a = number;
// console.log(a); /// 12


// import catModel from './1_export_default_1'

// const cat:catModel = {
//   name: '냥냥이',
//   breed:'길고양이'
// }

import MultipleExport from './1_export_default_1';

const chue = new MultipleExport.Idol('츄', 2); // 객체를 import하여 가져오기 때문에 MultipleExport.점을 넣어 원하는 export값을 가져오면 된다.
console.log(chue); //Idol { name: '츄', age: 2 }
console.log(MultipleExport.number); // 12
