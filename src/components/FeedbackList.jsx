import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <ul>
      {feedback.map((item) => (
        <li key={item.id}>
          <FeedbackItem item={item} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default FeedbackList;
