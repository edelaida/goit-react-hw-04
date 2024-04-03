import axios from "axios";

const ACCESS_KEY = "soeSXALL2rbtm5QVQFKtx_SDCoa5F0QUDDkb61eIncI";
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestPictures = async () => {
  const { data } = await instance.get(`/photos/?client_id=${ACCESS_KEY}`);
  return data;
};

export const requestPicturesQuery = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `/photos/?client_id=${ACCESS_KEY}&page=${page}&query=${query}`
  );
  return data;
};
