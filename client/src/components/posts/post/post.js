import React from "react";
import "./post.css";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  console.log("allposts : ", posts);

  const renderPost = posts.map((post) => {
    console.log(post);
    return (
      <div className="card" key={post._id}>
        <button className="update_button">...</button>
        <img className="card-img-top" src={post.selectedFile} alt="cardimage" />
        <div className="card-body">
          <p className="card-text">{post.tags}</p>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.message}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      {!posts.length ? (
        <div className="ring">
          Loading
          <span className="loadingspan"></span>
        </div>
      ) : (
        renderPost
      )}
    </>
  );
};
export default Post;
