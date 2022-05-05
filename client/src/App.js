import React, { useEffect } from "react";

import { getPosts } from "./redux/actions/posts";

import { useDispatch } from "react-redux";

import Form from "./components/form/form";
import Posts from "./components/posts/posts";
import Navbar from "./components/navbar/navbar";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className=" main">
        <Posts />
      </div>
      <Form />
    </>
  );
}

export default App;
