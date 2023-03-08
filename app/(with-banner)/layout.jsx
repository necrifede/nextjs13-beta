export default function PostsLayout({ children }) {
  return (
    <>
      <small>Home &bull; Posts </small>
      <marquee style={{ backgroundColor: 'white', color: 'purple' }}>bla bla bla marquee</marquee>
      {children}
    </>
  );
}
