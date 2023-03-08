const updateEachMinute = { next: { revalidate: 60 } };

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('algun err.')

  // incremental static generation.
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, updateEachMinute).then((res) => res.json());
};

export default async function CommentsPage({ params }) {
  console.log('comments params: ', params);
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#e0e0e0', fontSize: '12px' }}>
      {comments.map(({ id, name, email, body }) => (
        <li key={id}>
          <h4>{name}</h4>
          <h5>{email}</h5>
          <small>{body}</small>
        </li>
      ))}
    </ul>
  );
}
