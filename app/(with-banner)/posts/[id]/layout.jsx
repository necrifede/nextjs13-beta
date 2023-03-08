import Link from 'next/link';
import { ShowBtn } from './ShowBtn';

const updateEachMinute = { next: { revalidate: 60 } };
const fetchPosts = async (id) => {
  // incremental static generation.
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, updateEachMinute).then((res) => res.json());
};

export default async function PostLayout({ params, children }) {
  console.log('params: ', params);
  const { id } = params;
  const { title, body } = await fetchPosts(id);

  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      {/* TODO: create or update to a back link named as: 'Hide comments' */}
      <Link href={`/posts/${id}/comments`}>See Comments</Link>
      {children}
    </article>
  );
}
