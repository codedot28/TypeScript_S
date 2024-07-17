// Pick Type
// 포함하고 싶은 프로퍼티를 정할 수 있다.

interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post:Pick<Post, 'title'| 'content'>):Post {
  return {
    ...post,
    createdAt: new Date(), //createdAt은 자동으로 생성되게
}
}

createPost({
  title:'타이틀',
  content: '컨텐트',
})