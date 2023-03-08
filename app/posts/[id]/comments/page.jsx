const updateEachMinute = { next: { revalidate: 60 } };
const fetchComments = (id) => {
  // incremental static generation.
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, updateEachMinute).then((res) => res.json());
};

export default async function CommentsPage({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <>
      <ul>
        {comments.map(({ id, name, email, body }) => (
          <li key={id}>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
