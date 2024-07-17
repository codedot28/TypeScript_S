// Omit Type

// 포함하고 싶지 않은 프로퍼티를 넣어주면 된다.

interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post:Omit<Post, 'createdAt'>):Post {
  return {
    ...post,
    createdAt: new Date(), //createdAt은 자동으로 생성되게
}
}

createPost({
  title:'타이틀',
  content: '컨텐트',
})