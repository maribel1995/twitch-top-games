import axios from "axios";

export const service = axios.create({
  baseURL: "https://api.twitch.tv/helix/",
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
    "client-id": `${process.env.CLIENT_ID}`,
  },
});
