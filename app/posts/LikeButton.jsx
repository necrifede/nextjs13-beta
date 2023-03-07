'use client';

import { useState } from 'react';

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLiked((like) => !like);
  };
  return <button onClick={handleClick}>{liked ? '❤️' : '♡'}</button>;
}
