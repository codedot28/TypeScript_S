// Generic in Class

class Pagination<Data, Message>{
  data: Data[] = [];
  message?:Message;
  lastFetchedAt?:Date;
}

const pgData = new Pagination<number, string>();
pgData.data; // type number[]
pgData.message; // type string | undefined
pgData.lastFetchedAt; // type Date | undefined

//constructor 사용
class Pagination2<Data, Message>{
  data: Data[] = [];
  message?:Message;
  lastFetchedAt?:Date;

  constructor(data:Data[], message?:Message, lastFetchedAt?:Date){
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pagination2 = new Pagination2([123, 456]);
pagination2.data; //type number[] : [123, 456]이런식으로 number타입의 리스트를 넣었기 때문에 type이 number[]가 유추된것이고
pagination2.message; // type unknown : 어떠한 타입이라고 지정해 준게 없어 타입이 unknown됨.
pagination2.lastFetchedAt;

// 위와 같은 타입에 모호함을 없애기 위해 제네릭에 타입을 넣어주면 이와 같이 타입이 제대로 들어간 것을 확인 할 수 있다.
const pagination3 = new Pagination2<number, string>([123, 456]);
pagination3.data; //type number[] 
pagination3.message; // type string | undefined 
pagination3.lastFetchedAt;

// 클래스 제네릭 기본값 설정
class DefaultGeneric<T =boolean>{
  data: T[]= [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data; // type boolean[]