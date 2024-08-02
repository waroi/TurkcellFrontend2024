import React from "react";
import styles from './styles/CommentCard.module.scss';

const CommentCard = ({ comment }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentContent}>
        <div className={styles.commentRate}>
          {Array.from({ length: comment.rating }, (_, index) => (
            <i key={index} className="bi bi-star-fill star"></i>
          ))}
          {Array.from({ length: 5 - comment.rating }, (_, index) => (
            <i key={index} className="bi bi-star star"></i>
          ))}
        </div>
        <div className={styles.commentDescription}>
          {comment.comment}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
