'use client';

// import { useSelectedLayoutSegment, useRouter } from 'next/navigation';
import { Link } from 'next/link';

export function ShowBtn() {
  // const segment = useSelectedLayoutSegment();
  // const router = useRouter();
  // console.log('router: ', router);
  // const isComment = segment === 'comments';
  // isComment ? (
  //   <button onClick={router.back()}>Hide Comments</button>
  // ) :
  return <Link href={`/posts/2/comments`}>See comments 2</Link>;
}
