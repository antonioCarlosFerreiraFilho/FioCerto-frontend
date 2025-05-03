import { api, requestConfig } from "../utils/config";

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

// RecentlyPostedArticle
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

// About Article
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

const articleService = {
  PaginationArticle,
  GetArticle,
  RecentlyPostedArticle,
  aboutArticle,
  CommentsArticle,
};

export default articleService;
