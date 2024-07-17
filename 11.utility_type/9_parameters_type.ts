// Parameters Type

function sampleFunction(x:number, y:string, z:boolean){

}

type Params = Parameters<typeof sampleFunction> //type Params = [x: number, y: string, z: boolean]


// 여기서 typeof를 쓰는 이유는 function은 자바스크립트 function이기에 타입이 아니라 사용한다.

type Params2 = Parameters<(one:number)=> void>; // type Params2 = [one: number]