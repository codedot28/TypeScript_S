// Key Value Mapping (키와 벨류값을 자동 매핑 할 수 있는 다양한 방법)

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus =  {
  getUser: State;
  paginateUser: State | undefined;
  banUser: State | null;
  getPosts: State
}

// api요청에 대한 것을 글로벌하게 다루는 상황이라 예시를 들고,

// 유저 페이지에서 상태를 추가로 관리해야 하는 상황이면,

type UserApiStatus = {
  getUser: State;
  paginateUser: State | undefined;
  banUser: State | null;
}

type UserApiStatus2 ={
  getUser: GlobalApiStatus['getUser']; // GlobalApiStatus객체에 getUser라는 키를 가져와서 쓰게 되는 것임
  paginateUser: GlobalApiStatus['paginateUser'];
  banUser: GlobalApiStatus['banUser'];
}
// GlobalApiStatus여기서 선언한 값이 UserApiStatus2여기서도 같게 되는 형태

type UserApiStatus3 = {
  [k in 'getUser' | 'paginateUser' | 'banUser']: GlobalApiStatus[k]
}

// 유틸리티: 일반적인 타입 변환을 쉽게 하기 위해 TS에서 제공
// Pick(유틸리티)
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser'| 'banUser' | 'paginateUser'>;
// 이런식으로 pick를 써서 불러올 수도 있다.

// Omit(유틸리티)
type OmitUserStatus = Omit<GlobalApiStatus, 'getPosts'>;
// 제외하고 싶은 것만 입력하고 불러오는 방식


/**
 * keyof
 */

type AllKeys = keyof GlobalApiStatus;

const key:AllKeys = 'getUser';

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}
// keyof를 사용하여 `GlobalApiStatus`의 키,값이 들어와 있는 상태

// 하지만 마지막 getPosts를 제외 하고 싶다면
type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}
// Exclude를 사용하여 제외하고 싶은 키값을 위와 같이 입력하면, 입력한 키값을 제외하고 모두 나오는 것을 확인 할 수 있다.

interface LoadingStatus {
  type:'loading';
  data: string[]
}

interface ErrorStatus {
  type: 'error';
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type']