//Overloading


function stringOrString(meber1: string) :string //하나의 타입만 받는 함수
function stringOrString(meber1: string, member2:string, member3:string) :string // 3개 다 받는 함수



function stringOrString(memberOrMembers: string, member2?: string, member3?: string){
  if(member2 && member3){
    return `가족 : ${memberOrMembers}, ${member2}, ${member3}`
  }else {
    return `가족 : ${memberOrMembers}`
  }
}

// if
console.log(stringOrString('김, 이, 츄')); //가족 : 김, 이, 츄
console.log(stringOrString('김', '이', '츄')); //가족 : 김, 이, 츄

// else
// console.log(stringOrString('김', '이')); //가족 : 김


//if 조건에 맞는 형태로는 꼭 보이게 하고 싶다면 그때 overLoding을 하게 되는데