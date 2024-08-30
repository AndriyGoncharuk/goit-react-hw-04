import axios from "axios";

const API_KEY = "3fVnLBkIXp0wr0ZTW7ezZUVzqafSG0n0rginUM6XuFM";

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 15,
      client_id: API_KEY,
    },
  });
  return data;
};

// axios.defaults.baseURL = "https://api.unsplash/";
// axios.defaults.headers.common["Authorization"] = API_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 15,
// };

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get(`search?query=${query}&page=${page}`);

//   return data;
// };
