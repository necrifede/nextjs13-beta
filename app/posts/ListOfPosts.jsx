import Link from 'next/link';
import { LikeButton } from './LikeButton';

const noCache = { cache: 'no-store' };
const updateEachMinute = { next: { revalidate: 60 } };
const fetchPosts = () =>
  fetch('https://jsonplaceholder.typicode.com/posts', updateEachMinute).then((res) => res.json());

export async function ListOfPosts() {
  console.log('FETCHING POSTS!!!!!!');
  const posts = await fetchPosts();

  return posts.slice(0, 5).map(({ id, title, body }) => (
    <article key={id}>
      {/* <Link href="posts/[id]" as={`/posts/${id}`}> */}
      <Link href={`/posts/${id}`}>
        <h2 style={{ color: '#09f' }}>{title}</h2>
        <p>{body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
}
