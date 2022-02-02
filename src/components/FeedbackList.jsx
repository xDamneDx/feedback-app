import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <ul>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <li key={item.id}>
              <FeedbackItem item={item} handleDelete={handleDelete} />
            </li>
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  );

  // return (
  //   <ul>
  //     {feedback.map((item) => (
  //       <li key={item.id}>
  //         <FeedbackItem item={item} handleDelete={handleDelete} />
  //       </li>
  //     ))}
  //   </ul>
  // );
}

export default FeedbackList;
