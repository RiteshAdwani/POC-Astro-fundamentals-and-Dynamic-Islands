import { useStore } from "@nanostores/react";
import "./LikeButton.css";
import { getLikeCount, getLiked } from "../../stores/likeStore";

interface LikeButtonProps {
  slug: string;
}

/**
 * @description Button component for liking a post. It uses nanostores to manage the like count and liked state for each post. 
 * The like count is shared across all instances of the LikeButton for the same slug, while the liked state is individual to each instance.
 * When the button is clicked, it toggles the liked state and updates the like count accordingly.
 */
const LikeButton = ({ slug }: LikeButtonProps) => {
  const likeCount = getLikeCount(slug);
  const liked = getLiked(slug);
  const count = useStore(likeCount);
  const isLiked = useStore(liked);

  /**
   * @description Handle the like button click. If the post is already liked, it will unlike it and decrease the count. 
   * If it's not liked, it will like it and increase the count.
   */
  const handleLikeClick = () => {
    if (isLiked) {
      likeCount.set(count - 1);
      liked.set(false);
    } else {
      likeCount.set(count + 1);
      liked.set(true);
    }
  };

  return (
    <button
      onClick={handleLikeClick}
      className={`like-button${isLiked ? " liked" : ""}`}
      aria-label={isLiked ? "Unlike this post" : "Like this post"}
      aria-pressed={isLiked}
    >
      <span className="like-icon" aria-hidden="true">
        ♥
      </span>
      <span className="like-count">{count}</span>
    </button>
  );
};

export default LikeButton;
