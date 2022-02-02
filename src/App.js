import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Delete? Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
