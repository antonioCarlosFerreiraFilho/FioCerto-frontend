import { api, requestConfig } from "../utils/config";

// PROFILE
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(api + "/Users/profile", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// Update
const updateUser = async (data, token) => {
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(api + "/Users/Update", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// DELET POST
const deleteUser = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(api + "/Users/delete/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// showUsers
const showUser = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Users/showUsers", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// SEARCH
const searchUser = async (query) => {
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/Users/search?q=" + query, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const userService = {
  profile,
  updateUser,
  deleteUser,
  showUser,
  searchUser,
};

export default userService;
