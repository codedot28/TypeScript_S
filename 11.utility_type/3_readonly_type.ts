// Readonly Type

interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: '냐옹이',
  age: 8,
}


nyaong.name = '츄';
// 변경 가능

const chue:Readonly<Cat> ={
  name:'츄',
  age: 2
}

// chue.name = '순이'; //error

Object.freeze(chue); // JS