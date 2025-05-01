import { api, requestConfig } from "../utils/config";

// PUBLISH POST
const CreateArticle = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "/Posts/publishPhoto", config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// SEARCH
const PaginationArticle = async (query) => {
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/Article/gallery", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// SHOW POSTS
const ReadArticle = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Posts/", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// UPDATE POST
const UpdateArticle = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/photos/delete/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// DELET POST
const DeleteArticle = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(api + "/photos/delete/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// GET POST
const GetArticle = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Article/get/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// COMMENTS
const CommentsArticle = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/Article/comment/" + id, config)
      .then((res) => res.json())
      .catch((error) => error);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// DELET COMMENT
const DelCommentsArticle = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(api + "/photos/delete/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const articleService = {
  PaginationArticle,
  GetArticle,
  CommentsArticle,
};

export default articleService;
