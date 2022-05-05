//import * as api from "../../api/index";
import axios from "axios";
const url = "http://localhost:5000/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    console.log(response);

    const action = {
      type: "FETCH_ALL",
      payload: response.data,
    };

    dispatch(action);
  } catch (error) {
    console.log("ERROR : ", error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const response = await axios.post(url, newPost);
    const action = {
      type: "CREATE",
      payload: response.data,
    };

    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
