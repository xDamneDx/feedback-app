import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

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
              <FeedbackItem item={item} />
            </li>
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default FeedbackList;
