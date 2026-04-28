import { useState } from "react";
import "./LikeButton.css";

interface Props {
  initialCount?: number;
}

export default function LikeButton({ initialCount = 0 }: Props) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      setCount((c) => c - 1);
      setLiked(false);
    } else {
      setCount((c) => c + 1);
      setLiked(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`like-button${liked ? " liked" : ""}`}
      aria-label={liked ? "Unlike this post" : "Like this post"}
      aria-pressed={liked}
    >
      <span className="like-icon" aria-hidden="true">
        ♥
      </span>
      <span className="like-count">{count}</span>
    </button>
  );
}
