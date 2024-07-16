// Generic in Inheritance

class BaseCache<T>{
  data: T[] =[];
}

class StringCache extends BaseCache<string>{}

const stringCache = new StringCache();
stringCache.data; // type string[]

//이런식으로 하면 자식클래스에서 제너릭을 받아 부모클래스에 제너릭을 넘겨 줄 수 있다.
class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;
  
  constructor(message?:Message){
    super();
    this.message = message;
  }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data; // string[]
genericChild.message; // string | undefined

// 제너릭의 Inheritance

interface BaseGeneric {
  name: string;
}

class Idol<T extends BaseGeneric>{
  information: T;

  constructor(information:T){
    this.information = information;
  }
}

// 특정요소를 포함하고 싶은 타입으로 설정하고 싶다는 가정에서
// 예를 들어 name property는 존재했으면 좋겠다라고 하면
// <T extends BaseGeneric> 이런식으로 하게 되면 T타입은 BaseGeneric안에 있는 name프로퍼티를 무조건 따라야 한다.

const chue = new Idol({
  name:'츄',
  age:2 
})

// name는 꼭 있어야 한다.
// age는 없어도 에러가 나지 않는다.


/**
 * keyof 함께 사용하기
 */

const testObj = {
  a: 1,
  b: 2,
  c: 3,
}
function objectParser<O, k extends keyof O>(obj:O, key:k){
  return obj[key];
}

const val = objectParser(testObj,'a');

// k는 extends를 하는데 구조를 강제할 거야 어떤 구조를 강제하냐면 O라는 객체의 키 값들의 유니언을 포함하는 구조로 강제 할거야 라는 뜻!
// k는 a또는 b또는 c가 최소화 되야 한다.


/**
 * Ternary
 * 1===2 ? true : false;
 */

class Idol2{
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2{
  type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2:SpecificIdol<FemaleIdol> = new FemaleIdol(); // type FemaleIdol
const idol3:SpecificIdol<MaleIdol> = new MaleIdol(); // type MaleIdol