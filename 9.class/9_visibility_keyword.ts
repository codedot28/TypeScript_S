// Visibility Keyword
// TS만 존재하는 개념

/**
 * Visibility키워드
 * 1) public(기본값) - 어디서든 접근이 가능하다.
 * 2) protected - 현재 클래스 및 하위(자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스는 내부에서만 접근 가능하다.
 */

class PropertyTestParent {
 public publicProperty = 'public property'
 protected protectedProperty = 'protected property'
 private privateProperty = 'private property'
 #jsPrivateProperty = 'js private property' //js에 존재하는 개념

 test(){
  this.publicProperty;
  this.protectedProperty;
  this.privateProperty;
  this.#jsPrivateProperty;
 }

 // 선언은 위와 같이 잘됨
}

// 상속을 해보면

class PropertyTestChild extends PropertyTestParent {
  test(){
    this.publicProperty;
    this.protectedProperty;
    // this.privateProperty;    //error : 'privateProperty' 속성은 private이며 'PropertyTestParent' 클래스 내에서만 액세스할 수 있습니다.
    // this.#jsPrivateProperty; // error : '#jsPrivateProperty' 속성은 프라이빗 식별자를 포함하기 때문에 'PropertyTestParent' 클래스 외부에서 액세스할 수 없습니다.
   }
}

const instance = new PropertyTestChild();
instance.publicProperty; // 이거 이 외에는 instance가 불가하다.