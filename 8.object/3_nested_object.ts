// Nested Object (중첩된 객체) 정의하기

// 객체 안에 객체 선언
type NestedPerson = {
  identity: {
    name:string;
    age: number;
  },
  nationality:string;
}

const codedot:NestedPerson= {
  identity: {
   name: '김',
    age: 33
  },
  nationality: '한국'
}

// 객체를 나눠서 선언하는게 좋은지, 한 번에 선언하는게 좋은지에 대한 문제
type TPerson = {
  identity: TPersonIdentity,
  nationality: string
}

type TPersonIdentity = {
  name: string;
  age: number;
}

const chue:TPerson = {
  identity: {
    name:'츄',
    age: 2
  },
  nationality:'한국'
}

//Interface
interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const k: IPerson = {
  identity:{
    name:'k',
    age: 33
  },
  nationality:'한국'
}