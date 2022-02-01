import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const feedbackDelete = (id) => {
    if (window.confirm("Delete? Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={feedbackDelete} />
      </div>
    </>
  );
}

export default App;
