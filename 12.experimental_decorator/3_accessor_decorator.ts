// Accessor Decorator

class Rectangle{
  #height: number;
  #width: number;

  constructor(height: number, width:number){
    this.#height = height;
    this.#width = width;
  }

  // #샵으로 시작했기 때문에 js private값이라 외부에서 엑세스를 못함 그래서 get, setter를 만든다.

  @Configurable(false)
  get height() {
    return this.#height;
  }

  @Configurable(true)
  get width(){
    return this.#width;
  }
}

function Configurable(configurable:boolean){
  return function(target:any, prototypeKey: string, descriptor:PropertyDescriptor){
    descriptor.configurable = configurable;
  }
}

const rectangle = new Rectangle(100, 200);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
// {
//   constructor: {
//     value: [class Rectangle],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   height: {
//     get: [Function: get height],
//     set: undefined,
//     enumerable: false,
//     configurable: false
//   },
//   width: {
//     get: [Function: get width],
//     set: undefined,
//     enumerable: false,
//     configurable: true
//   }
// }