// Intersection(교집합 &)
// And의 개념(A와 B)

interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: '김',
  age: 33,
  phone: '01012345567',
  address: '서울시'
};

// 이미지
// 이런식으로 Contacts에 들어가는 phone타입과 address타입이 필요하다라는 애러가 발생하게 된다.
// 즉, intersection을 사용하게 되면 Human & Contacts 이 2개의 타입이 합쳐진다.

// primitive값을 intersection 하면 never타입이 된다.
type NumberAndString = number & string;

// let numberAndString:NumberAndString = '스트링'
// 어떠한 값을 넣어도 애러 발생