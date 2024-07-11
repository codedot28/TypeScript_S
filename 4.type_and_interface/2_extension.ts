// Extention
// '상속을 받는다' 라는 개념

// Interface 방식
interface Iname {
  name: string;
}

interface IGroup extends Iname {
  age: number;
}

const igroup: IGroup ={
  name: '김',
  age: 33
}

//Type방식
type TName = {
  name: string;
}

type TGroup  = TName & {age: number};

const igroup2: TGroup = {
  name: '김',
  age: 33
}

// name이 IGroup에 없더라도, interface를 통해 상속되었기 때문에 name이 없으면 에러가 발생하게 된다.

// interface로 type을 상속받을 수도 있는데
interface IGroup2 extends TName {
  age: number;
}

const igroup3:IGroup2  = {
  name: '김',
  age: 33
}

// Type에서 interface를 상속 받을 수도 있음

type TGroup2 = Iname & {age: number};

 const tGroup2:TGroup2 ={
  name: '김',
  age: 33
 }

 // interface에서 상속받을때는 extends를 사용하고, type에서 상속할때는 & 키워드를 사용한다.


//  extending multiple

type DogName= {
  name: string;
}

type DogAge = {
  age: number;
}

type DogBreed = {
  breed: string;
}

type Dog = DogName & DogAge & DogBreed; // 이런식으로 무한하게 extend가 가능하다.

const dog:Dog = {
  name: '츄',
  age: 2,
  breed: '말티츄'
}

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge{ // , 콤마를 통해 extending이 가능하다.
  breed: string;
}

const cat:Cat ={
  name: '나옹이',
  age: 12,
  breed: '페르시안'
}

// overloding
type Theight = {
  height: number;
}

type TRectangle = Theight & {
  height: string;
  width: number;
}

// const rectangle: TRectangle = {
//   height:100, // error type never
//   width: 200,
// }

// primitive값들은 intersection을 만들면 never타입이 되기 때문에 에러가나면서 프로퍼티의 값을 입력 할 수 없게 된다.

type Twidth = {
  width: number | string;
}

type TRectangle2 = Twidth & {
  width: number;
  height: number;
}
// height number로 타입을 지정했기 때문에 아래 TRectangle2전체 타입이 number로 됨 네로잉이 되어버림
// 위에서 유니언을 사용하지 않은 경우에는 never가 되지만 현재는 정확한 타입으로 변환됨

const rectangle: TRectangle2 = {
  height: 100,
  width: 200,
}


interface IWidth{
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number; // number, string 모두 가능
  height:number;
}