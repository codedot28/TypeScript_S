// Reflect Metadata

import 'reflect-metadata'

const chue = {
  name: '츄',
  age: 2,
  country: 'korea'
}

console.log(chue); //{ name: '츄', age: 2, country: 'korea' }

/**
 * defineMetadata의 파라미터 정의
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티
 * 
 * 4번은 필수가 아니다.
 * 
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', 123, chue);
// 자바스크립트 코드 내에서는 보이지 않고 reflect라이브러리를 사용해야만 볼 수 있다.

console.log(Reflect.getMetadata('test-meta',chue)); // 123
// 위에서 defineMetadata 할 때 123이라는 값은 'test-meta'라는 키에에 저장을 했고 chue라는 객체에다 저장을 했다.

// 한번 더 정의하면 가장 최근의 값(345)이 저장된다.
Reflect.defineMetadata('test-meta', 345, chue);
console.log(Reflect.getMetadata('test-meta',chue)); //345

// 만약 메타데이터의 키의 네임이 변경된다면
Reflect.defineMetadata('meta2', 789, chue);
console.log(Reflect.getMetadata('meta2',chue)); //789
console.log(Reflect.getMetadata('test-meta',chue)); //345

//저장할 값을 객체로 만들어도 가능
Reflect.defineMetadata('meta3', {name: 'codedot'}, chue);
console.log(Reflect.getMetadata('meta3',chue)); //{ name: 'codedot' }

/**
 * 프로퍼티에 저장하기
 */

Reflect.defineMetadata('object-meta', 999, chue, 'name');
console.log(Reflect.getMetadata('object-meta',chue, 'name')); /// 999

//삭제
Reflect.deleteMetadata('object-meta', chue, 'name');

// chue안에 name프로퍼티를 삭제 하겠다.
console.log(Reflect.getMetadata('object-meta',chue, 'name')); //undefined

// 메타데이터에 프로퍼티가 존재하는가를 확인하는 방법
console.log(Reflect.hasMetadata('object-meta',chue, 'name')); //false

// 모든 키값 가져오기
console.log(Reflect.getMetadataKeys(chue)); // [ 'test-meta', 'meta2', 'meta3' ]

// 자기 자신에 존재하는지만 확인
Reflect.defineMetadata('prototype-data', '프로토타입 메타', Object.getPrototypeOf(chue));
console.log(Reflect.getMetadataKeys(chue)); //[ 'test-meta', 'meta2', 'meta3', 'prototype-data' ]
console.log(Reflect.getOwnMetadataKeys(chue)); //[ 'test-meta', 'meta2', 'meta3' ]

