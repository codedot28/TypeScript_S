// Abstract Class
// js에는 없는 개념
// abstract class는 인스턴스 할 일이 절대로 없는데 공유되는 값들을 프로퍼티나 메소드들을 정의 또는 상속을 받을 경우 사용한다.

abstract class ModelWithId{
  id: number;

  constructor(id: number){
    this.id = id;
  }
}

// ModelWithId는 instance로 만들 수 없는데...

// const ModelWithId = new ModelWithId(123); // error
// abstract class는 직접적인 선언이 불가하다. 그렇기 때문에 error발생

// 주로 extends를 할 때 사용하는데.

class Product extends ModelWithId {

}

const product = new Product(1);
product.id;  // ModelWithId.id: number

// 또 다른 방법
abstract class ModelWithAbstractMethod{
  abstract shout(name: string): string
}
// 메서드를 구현 하면 

class Person extends ModelWithAbstractMethod{
  shout(name: string): string {
      return '소리질러!~'
  }
}
// 메서드의 구현을 강제할 수 있다.