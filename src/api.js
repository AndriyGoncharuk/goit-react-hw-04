import axios from "axios";

const API_KEY = "3fVnLBkIXp0wr0ZTW7ezZUVzqafSG0n0rginUM6XuFM";

const BASE_URL = "https://api.unsplash.com/";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}search/photos`, {
    params: {
      query,
      page,
      per_page: 15,
      client_id: API_KEY,
    },
  });
  return response.data;
};
