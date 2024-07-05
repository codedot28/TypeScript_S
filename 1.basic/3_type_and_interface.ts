// Type 타입은 쉽게 말해 TS의 타입에 이름을 지어주는 역할

type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdolType = {
  name: string;
  year: number;
}

const yuJin: IdolType ={
  name: '안유진',
  year: 2002,
}

// Interface - type과 유사하나 type보다 나중에 생겼으며 tpye이 하지 못하는 기능을 할 수 있다.

interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2 : IdolInterface = {
  name: '안유진',
  year: 2002
}

// 위에 타입으로 만든 부분과 비슷함 interface

// type으로 type가 가능하고 interface에 타입으로 만든것을 넣을 수도 있음
interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: '안유진',
  year: 2002
}


// Optional(?) - 있어도 되고, 없어도 되는 프로퍼티 정의

interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = {
  name: '안유진',
}
