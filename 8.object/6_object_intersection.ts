// Object Intersection (객체 인터섹션)

type PrimitiveIntersection = string & number; // type never
// string과 number를 동시에 충족하는 것은 존재할 수 없으니까 never

// 객체는 동시에 충족하는 것을 만들 수 있는데
type PersonType = {
  name: string;
  age: number;
}

type CompanyType = {
  company: string;
  companyNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;
// intersection 왼쪽과 & 오른쪽을 모두 충족 시켜야 한다.

const k: PersonAndCompany = {
  name: '김',
  age: 33,
  company:'KK',
  companyNumber:'xxxxyyyyzzzz'
}

//intersection과 union을 섞을 수 있다.
type PetType = {
  petName: string;
  petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet ={
  //PersonType
  name: '김',
  age: 33,

  //CompanyType
  company: '김김김',
  companyNumber: 'xxxxyyyyzzzz',
  //PetType
  petName:'츄',
  petAge: 2,
}
// PersonType은 무조건 입력해 줘야 하는 프로퍼티인데 intersection이기 떄문에 