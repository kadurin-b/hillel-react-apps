import axios from "axios";
const URL = "https://612687da3ab4100017a68fd8.mockapi.io/stickers/";

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
