// Multi Dimension Array
 
// 1D Dimenstion
// [1,2,3]

// 2D Dimenstion
// [
//  [1,2,3],
//  [1,2]
//]

// 3D Dimenstion
//[
// [
//  [1,2,3],
//  [1,2]
// ]
//]

const number2DArr: number[][] = [
  [1,2,3],
  [4,5,6]
]

const str2DArr =[
  ['1','2','3'],
  ['4','5','6']
] 

// 유추는 string[][] 이런식으로 유추 된다.

const strAndNumArr:(number | string)[][] = [
  [1,'2',3],
  ['4',5,'6']
]

let strArrorNumArr:string[][] | number[][] = [
  [1,2,3],
  [4,5,6]
  // ['4','5','6'] // 이런식으로 string이 들어간건 안됨 error
]

strArrorNumArr = [
  ['1','2','3'],
  ['4','5','6']
]


// []어레이표시를 몇개를 해주냐에 따라 다르지 크게 다르진 않다.