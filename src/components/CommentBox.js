import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions";

const CommentBox = ({ saveComment, fetchComments }) => {
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
    <div>
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
      <button onClick={fetchComments}>Fetch Comments</button>
    </div>
  );
};

export default connect(null, { saveComment, fetchComments })(CommentBox);
