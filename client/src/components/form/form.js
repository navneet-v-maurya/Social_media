import React, { useState } from "react";
import "./form.css";

import FileBase from "react-file-base64";

import { createPost } from "../../redux/actions/posts";

import { useDispatch } from "react-redux";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    handleClear();
  };

  const handleClear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <form className="p-3 form">
      <label>Creating a Memory</label>
      <div className="form-group w-100">
        <input
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
          type="text"
          className="form-control"
          placeholder="Title"
        />
      </div>
      <div className="form-group w-100">
        <textarea
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
          className="form-control"
          rows="3"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="form-group w-100">
        <input
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value });
          }}
          type="text"
          className="form-control"
          placeholder="Tags"
        />
      </div>
      <div className="mb-3 form-group w-100">
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setPostData({ ...postData, selectedFile: base64 });
          }}
        />
      </div>
      <div className="form-group w-100">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary w-100"
        >
          Submit
        </button>
      </div>
      <div className="form-group w-100">
        <button onClick={handleClear} className="btn btn-danger w-100">
          Clear
        </button>
      </div>
    </form>
  );
};
export default Form;
