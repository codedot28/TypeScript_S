// Object Union (객체 유니언)

// 유추된 객체 타입 유니언

const dogOrCat = Math.random() > 0.5?
// 강아지 
{
  name: '별이',
  age: 12

} : 
//  고양이
{
  name: '오리',
  breed: '길고양이'
}

// 반반의 확률로 강아지나 고양이 타입이 나올 수 있는 상태

dogOrCat.name; //type string;
dogOrCat.age; // type number | undefined
dogOrCat.breed; // type string | undefined

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5?
// 강아지 
{
  name: '별이',
  age: 12

} : 
//  고양이
{
  name: '오리',
  breed: '길고양이'
}

dogOrCat2.name; // type string
// dogOrCat2.age; // error 
// dogOrCat2.breed; // error

// 직접적으로 명시를 했기 때문에 타입을 가져 올 수 없음

// 내로잉 사용

if('age' in dogOrCat2){
  dogOrCat2; // type Dog
  dogOrCat2.age;
  dogOrCat2.name
}else {
  dogOrCat2; // type Cat
  dogOrCat2.name;
  dogOrCat2.breed;
}