import Image from 'next/image';

const updateEachMinute = { next: { revalidate: 60 } };

const fetchComments = async (id) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('algun err.')

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
          <Image width="50" height="50" src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${email}`} alt={email} />
          {/* <img width="250" height="250" src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${email}`} alt={name} /> */}
          <h5>{email}</h5>
          <small>{body}</small>
        </li>
        // <img width="250" height="250" src="https://api.dicebear.com/5.x/adventurer/svg?seed=Eliseo@gardner.biz" alt="id labore ex et quam laborum"></img>
        // <img alt="Eliseo@gardner.biz" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Fapi.dicebear.com%2F5.x%2Fadventurer%2Fsvg%3Fseed%3DEliseo%40gardner.biz&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fapi.dicebear.com%2F5.x%2Fadventurer%2Fsvg%3Fseed%3DEliseo%40gardner.biz&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fapi.dicebear.com%2F5.x%2Fadventurer%2Fsvg%3Fseed%3DEliseo%40gardner.biz&amp;w=640&amp;q=75" style=""></img>
        // use object-fit on images
      ))}
    </ul>
  );
}
