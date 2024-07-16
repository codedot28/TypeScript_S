// Generic in Implementation

interface Singer<T, V>{
  name: T;
  sing(year: V):void;
}

class Idol implements Singer<string, number>{
  name: string;

  constructor(name: string){
    this.name = name;
  }

  sing(year: number): void {
      console.log(`[${year}] ${this.name}가 노래를 부릅니다.`); //[2004] 츄가 노래를 부릅니다.
  }
}

const chue = new Idol('츄');
chue.sing(2004);

class Idol2<T,V> implements Singer<T, V>{
  name:T;

  constructor(name: T){
    this.name = name;
  }

  sing(year: V): void {
      console.log(`[${year}] ${this.name}가 노래를 부릅니다.`); //[2024] 이가 노래를 부릅니다.
  }
}

const lee = new Idol2<string, number>('이');
lee.sing(2024);