// Class 선언하기

class SampleClass {} // 클래스 선언

// class Game {
//   name:string;
//   country: string;
//   download: number;
// }

// 이 상태로 하게 되면 에러가 나는데, 초기화를 해주지 않았기 때문에 Ts가 알아서 알려준다.
// 초기화를 하지 않는 실수를 초기에 방지 할 수 있다.

// class의 일반적인 초기화는 constructor에서 하기에 constructor에 이런식으로 초기화 하면 에러가 사라진다. 
class Game {
  name:string;
  country: string;
  download: number;
  
  constructor(name: string, country:string, download: number){
    this.name = name,
    this.country= country,
    this.download = download
  }

  introduce(){
    return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`
  }
}

const starcraft = new Game (
  'Star Craft',
  'USA',
  10000000,
)

const retVal = starcraft.introduce();
console.log(retVal); //Star Craft은 USA에서 제작된 10000000개의 다운로드를 달성한 게임입니다.
