import postMessage from "../models/postMessage.js";

export const getPosts = async (request, response) => {
  try {
    const postMessages = await postMessage.find();
    console.log(postMessages);
    response.status(200).json(postMessages);
  } catch (error) {
    response.status(200).json({ message: error.message });
  }
};

export const createPost = async (request, response) => {
  const post = request.body;
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    response.status(201).json({ newPost });
  } catch (error) {
    response.status(409).json({ error });
  }
};
