import { api, requestConfig } from "../utils/config";

// PUBLISH Article
const publishArticle = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "/Article/newarticle", config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Read
const PaginationArticle = async (page) => {
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/Article/gallery/" + page, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// GET
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

//Like Project
const LikesArticle = async (id, token) => {
  const config = requestConfig("PUT", null, token);

  try {
    const res = await fetch(api + "/Article/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

//Views
const ViewsArticle = async (id) => {
  const config = requestConfig("PUT");

  try {
    const res = await fetch(api + "/Article/view/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// Recently
const RecentlyPostedArticle = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Article/recently", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// About
const aboutArticle = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Article/about", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// Update
const UpdateArticle = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/Article/Update/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// Delete
const DeleteArticle = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(api + "/Article/del/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// Comments
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

// Comment Delete
const DelCommentsArticle = async (data, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + `/Article/delComment`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// Search
const SearchArticle = async (query) => {
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/Article/search?q=" + query, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const articleService = {
  publishArticle,
  PaginationArticle,
  GetArticle,
  LikesArticle,
  ViewsArticle,
  RecentlyPostedArticle,
  aboutArticle,
  UpdateArticle,
  DeleteArticle,
  CommentsArticle,
  DelCommentsArticle,
  SearchArticle,
};

export default articleService;
