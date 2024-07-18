// import

import {IdolModel, k, number, ICat} from './2_export_1'

const chue = new IdolModel('츄', 2);
console.log(chue); //IdolModel { name: '츄', age: 2 }
console.log(k); //IdolModel { name: 'k', age: 33 }
console.log(number); // 9999

const cat:ICat = {
  name: '냥이',
  age: 3
}

console.log(cat); //{ name: '냥이', age: 3 }
