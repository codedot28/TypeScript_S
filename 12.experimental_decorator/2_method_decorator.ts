// Method Decorator
class Idol {
  name: string;


  constructor(name:string){
    this.name = name;
   
  }
  @TesMethodDecorator
  @Configurable(false)
  @MethodCallLogger('PROD')
  dance(){
    return `${this.name}가 춤을 춥니다.`;
  }
}

// @데코레이터는 어디 위에 입력을 하느냐에 따라 뭐가 데코레이팅이 된다.

/**
 * target - static method에 데코레이팅을 할 경우 생성자 함수
 *        - instance method에 데코레이팅 할 경우 인스턴스의 prototype
 * propertyKey - 메서드의 이름
 * descriptor - property descriptor
 */

function TesMethodDecorator(target:any, prototypeKey: string, descriptor:PropertyDescriptor){
  console.log('LogCall');
  console.log('---target---');
  console.log(target);  
  console.log('---prototypeKey---');
  console.log(prototypeKey);  
  console.log('---descriptor---');
  console.log(descriptor);   
}

const chue = new Idol('츄');
console.log('--- run dance ---');
chue.dance();

function Configurable(configurable:boolean){
  return function(target:any, prototypeKey: string, descriptor:PropertyDescriptor) {
    descriptor.configurable = configurable;
  }
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype));
// {
//   constructor: {
//     value: [class Idol],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   dance: {
//     value: [Function: dance],
//     writable: true,
//     enumerable: false,
//     configurable: false
//   }
// }

function MethodCallLogger(env:string){
  return function (target:any, prototypeKey: string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
      console.log(`[${env}] running function : ${prototypeKey}`);

      const result = originalMethod.apply(this, ...args);
      return result;
    }
  }
}

// [PROD] running function : dance
// {
//   constructor: {
//     value: [class Idol],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   dance: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: false,
//     configurable: false
//   }
// }

chue.dance();

// [PROD] running function : dance
// {
//   constructor: {
//     value: [class Idol],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   dance: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: false,
//     configurable: false
//   }
// }
// [PROD] running function : dance

console.log(chue.dance()); //츄가 춤을 춥니다.
