import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment } from "actions";

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(comment);
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea
        onChange={handleChange}
        value={comment}
        name="comment"
        id="comment"
        cols="30"
        rows="10"
      />
      <div>
        <button type="submit">Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, { saveComment })(CommentBox);
