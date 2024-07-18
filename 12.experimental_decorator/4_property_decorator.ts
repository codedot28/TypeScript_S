// Property Decorator

class userModel {
  @PropertyLogger
  id: string;
  name: string;

  constructor(id:string, name:string){
    this.id = id;
    this.name = name; 
  }
}

function PropertyLogger(target:any, prototypeKey: string){
  console.log(`${prototypeKey} 값이 정의 됐습니다.`); //id 값이 정의 됐습니다.
  
}