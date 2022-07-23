import { useEffect } from 'react';
import Post from './__DTO__/Post';
import User from './__DTO__/User';
import Comment from './__DTO__/Comment';

export default function App() {
  useEffect(() => {
    // tente passar sem algum dado
    const _user = new User({
      name: 'John Doe',
      email: 'felipefrancafj@gmail.com',
      password: 'felpqwe',
    });

    const _post = new Post();

    // tente preencher os dados validos
    const _comment = new Comment();

    console.log('user', _user);
    console.log('post', _post);
    console.log('comment', _comment);
  }, []);

  return <div>Em breve novidades</div>;
}
