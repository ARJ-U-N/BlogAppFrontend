import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Viewmypost = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3030/viewmypost", {
        headers: { token: token, "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data.status === "invalid Authentication") {
          alert("Please sign in to view your posts");
          navigate("/");
        } else if (response.data.status === "user not found") {
          alert("User not found");
          navigate("/");
        } else {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred: " + error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="my-3 text-center">My Posts</h2>
        <div className="row g-3">
          {data.length > 0 ? (
            data.map((value, index) => (
              <div key={index} className="col-12">
                <div
                  className="card"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePostClick(value._id)}
                >
                  <div className="row g-0">
                    <div className="col-4">
                      <img
                        src={
                          value.thumbnail || "https://via.placeholder.com/150"
                        }
                        className="img-fluid rounded-start"
                        alt={value.title}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          {value.title}
                        </h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {value.readTime} | {value.likes} Likes
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Viewmypost;