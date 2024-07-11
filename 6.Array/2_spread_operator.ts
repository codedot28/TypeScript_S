// Spread Operator

const onlyString = ['1','2','3','4'];
const onlyNumbers = [1,2,3,4];

const arr1 = [ // string[]
  ...onlyString
]

const arr2 = [  // (string | number)[]
  ...onlyString,
  ...onlyNumbers
]