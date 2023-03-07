export default function Post({ params }) {
  const { id } = params;

  return <h2>Post number: {id}</h2>;
}
