// Override(오버라이드)

class Parent {
  shout(name:string){
    return `${name}야 안녕!!`
  }
}

// 부모에 있는 shout함수를 자식에게 덮어쓰려고 하는 상황
// class WrongChild extends Parent {
//   shout(){
    
//   }
//   // 이렇게 하면 안된다.
// }

/**
 * 오버라이드의 룰
 * 1)부모 메서드와 반환 타입이 일치해야한다.
 * 2)부모 메서드에 필수인 파라미터들이 존재햐아한다.
 * 3)부모 메서드에서 옵셔널이 파라미터들이 자식에서 필수로 지정되면 안된다.
 */

class Child extends Parent {
  shout(name: string, me?:string): string {
   if(!me){
    return super.shout(name);
   }else {
    return super.shout(name) + `내 이름은 ${me}야!`
   }
  }
}

const child = new Child();
console.log(child.shout('츄')); //츄야 안녕!!
console.log(child.shout('츄', '김')); //츄야 안녕!!내 이름은 김야!


//속성 오버라이

class PropertyParent {
  name: string;

  constructor(name:string){
    this.name = name;
  }
}

// class PropertyChild extends PropertyParent{
//   name: number;

//   constructor(name: number){
//     this.name = name;
//   }
// } // error

// 이런식으로 하면 안되고,

class PropertyParent2 {
  name:string | number;

  constructor(name:string | number){
    this.name = name;
  }
}

class PropertyChild2 extends PropertyParent2{
  name: string;

  constructor(name: string){
    super(name);
    this.name = name;
  }
}

const child2 = new PropertyChild2('김김');
child2.name; //type string