//Namespace

namespace Home {
  class Idol {
      name: string;
      age: number;

      constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }
  }

  export const chue = new Idol(
      '츄',
      22,
  );
}

namespace Post {
  class User {
      email: string;
      name: string;

      constructor(email: string, name: string) {
          this.email = email;
          this.name = name;
      }
  }

  const admin = new User('admin@codedot.ai', Home.chue.name);

  console.log(admin); //User { email: 'admin@codedot.ai', name: '츄' }
}

//네임스페이스 중첩
namespace Comment {
  const name = 'comment';

  namespace Detail {
      const page = 'detail';

      console.log(name); //comment
      console.log(page); //detail
  }

  console.log('----------');
  console.log(name); //comment
//  console.log(page); /error 내부에 있는 변수라 error
}