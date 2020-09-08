import axios from "axios";

export const service = axios.create({
  baseURL: process.env.TWITCH_URL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
    "client-id": `${process.env.CLIENT_ID}`,
  },
});
