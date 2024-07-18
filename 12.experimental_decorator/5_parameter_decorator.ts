// Parameter Decorator 

class Cat {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  dance(@LogParam adj:string){
    console.log(`${this.name}가 ${adj} 춤을 춥니다.`); //냥이가 신나게 춤을 춥니다.
    
  }
}

const cat = new Cat('냥이');
cat.dance('신나게');

// 파라미터 데코레이터
function LogParam(target:any, propertyKey:string, paramIndex:number){
  console.log(`${paramIndex}번째 파라미터인 ${propertyKey}가 입력됐습니다.`); //0번째 파라미터인 dance가 입력됐습니다.
  
}