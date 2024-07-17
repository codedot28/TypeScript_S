// NonNullable Type

// 유니언만큼 원하는 만큼 입력이 가능한데, 여러 개의 타입중에서 null이 될수 없는 값들만 추출 할 수 있다.

type NonNull = NonNullable<string | boolean | number | null | undefined | object>; //type NonNull = string | number | boolean | object

// null | undefined 는 null이 될 수 있기 때문에 제외가 된다.