// Required Type
// 전부다 필수로 만든다

// 
interface Dog {
  name:string;
  age?:number;
  country?:string;
}

const requiredDog:Dog={
  name: '츄'
}
// age,country의 경우 옵셔널이기 때문에 name만 불러와도 가능
// 하지만 required를 사용하는 경우

const requiredDog2:Required<Dog>={
  name: '츄',
  age:2,
  country:'대한민국'
}

// 제네릭에 넣은 프로퍼티들이 필수가 되도록 만드는게 required의 기능