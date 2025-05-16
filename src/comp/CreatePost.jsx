import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const CreatePost = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const [input, setInput] = useState({
    userId: sessionStorage.getItem("userId"),
    title: "",
    message: "",
    thumbnail: "",
    readTime: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlePost = () => {
    axios
      .post("http://localhost:3030/create", input, {
        headers: { token: token, "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data.status === "Success") {
          alert("Posted successfully");
          setInput({
            userId: sessionStorage.getItem("userId"),
            title: "",
            message: "",
            thumbnail: "",
            readTime: "",
          });
        } else {
          alert("Failed to post: " + response.data.status);
        }
      })
      .catch((error) => {
        alert("An error occurred: " + error.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="my-3 text-center">Create a Post</h2>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              value={input.title}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Enter post title"
            />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Post Content
            </label>
            <textarea
              name="message"
              value={input.message}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Write your post content here"
              rows="5"
            ></textarea>
          </div>
          <div className="col-12">
            <label htmlFor="thumbnail" className="form-label">
              Thumbnail URL (Optional)
            </label>
            <input
              type="text"
              name="thumbnail"
              value={input.thumbnail}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Enter image URL"
            />
          </div>
          <div className="col-12">
            <label htmlFor="readTime" className="form-label">
              Read Time (Optional, e.g., '10 min')
            </label>
            <input
              type="text"
              name="readTime"
              value={input.readTime}
              className="form-control"
              onChange={handleInputChange}
              placeholder="e.g., 10 min"
            />
          </div>
          <div className="col-12">
            <button className="btn btn-success w-100" onClick={handlePost}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;