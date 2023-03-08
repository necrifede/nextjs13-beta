import Link from 'next/link';

const updateEachMinute = { next: { revalidate: 60 } };
const fetchPosts = (id) => {
  // incremental static generation.
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, updateEachMinute).then((res) => res.json());
};

export default async function PostLayout({ params, children }) {
  const { id } = params;
  const { title, body } = await fetchPosts(id);

  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link href={`/posts/${id}/comments`}>See Comments</Link>
      {children}
    </article>
  );
}
