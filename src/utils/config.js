const path =  import.meta.env.VITE_API_URL;
const back = "api";
export const uploads = import.meta.env.VITE_API_URL_UPLOADS;
export const api = path + back;

export const requestConfig = (method, data, token = null, image = null) => {
  let config;
  
  if (image) {
    config = {
      method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    };
  }
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
};
