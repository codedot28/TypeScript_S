// Generic in Type

type GenericSimpleType<T> = T;

const genericSimpleType:GenericSimpleType<string> = '스트링';
// const genericSimpleType2:GenericSimpleType = '스트링'; // 유추 불가

interface DoneState<T>{
  data: T[];
}

interface LoadingState{
  requesteAt:Date;
}

interface ErrorState {
  error:string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  data:['123','456'],
}

state = {
  requesteAt: new Date()
}

state = {error:'error'}