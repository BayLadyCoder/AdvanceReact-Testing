import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call an action creator to save the comment
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

export default CommentBox;
