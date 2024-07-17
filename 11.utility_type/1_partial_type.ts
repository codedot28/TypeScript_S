// Partial Type
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const chue: Idol ={
  name: '츄',
  age: 2,
  groupName:'별'
}


// updates가 original보다 나중에 스프레드 됐기때문에 updates있는 업데이츠에 있는 항목들은 오리지날 안에 있는 항목을 덮어쓰게 된다.

// 여기서 interface Idol의 항목들을 전체를 받는게 아닌, 부분적으로 받고 싶은 경우에
function updateIdol(original:Idol, updates:Partial<Idol>):Idol{
  return{
    ...original,
    ...updates,
  }  
}

console.log(updateIdol(chue, {
  age:2.5
})) // { name: '츄', age: 2.5, groupName: '별' }