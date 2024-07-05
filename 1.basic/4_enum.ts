// Enum

// ex
// API 요청을 한다.
// 상태는 4가지 상태

// DONE - 요청 완료 상태
// ERROR - 애러가 생긴 상태
// LOADING - 로딩상태
// INITIAL - 초기 상태

function runWork() {
  let state = 'INITIAL';

  try {
    // 작업을 시작.
    state = 'LOADING'

    // 작업이 끝나면
    state = 'DONE'
  }catch(e){
    // 작업 애러상태
    state = 'ERROR'
  }finally {
    return state;
  }
}

console.log(runWork() === 'DONE');


// JS의 경우

const doneState = 'DONE';
const errorState = 'ERROR';
const loadingState = 'LOADING';
const initialState = 'INITIAL';

function runWork2() {
  let state = initialState;

  try {
    // 작업을 시작.
    state = loadingState

    // 작업이 끝나면
    state = doneState
  }catch(e){
    // 작업 애러상태
    state = errorState
  }finally {
    return state;
  }
}

console.log(runWork2() === doneState);

// enum

enum State {
  DONE,
  ERROR,
  LOADING,
  INITIAL,
}

function runWork3() {
  let state = State.INITIAL;

  try {
    // 작업을 시작.
    state = State.LOADING;

    // 작업이 끝나면
    state = State.DONE;
  }catch(e){
    // 작업 애러상태
    state = State.ERROR;
  }finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
console.log(runWork3()) //0
// State안에 Done부터 각각의 숫자가 부여되기에 0이 출력됨(ERROR = 1, LOADING = 2, INITIAL = 3)
// 만약 숫자가 아닌 값을 받고 싶으면 
// enum State {
//   DONE = 'DONE',
//   ERROR = 'ERROR',
//   LOADING = 'LOADING',
//   INITIAL = 'INITIAL',
// }
// 이런식으로 값을 넣어 주게되면 console에 runWork3를 찍었을때 Done가 찍히게 된다.