import axios from "axios";

const Service = () => {
  return axios.create({
    baseURL: `${process.env.TWITCH_URL}`,
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
      "client-id": `${process.env.CLIENT_ID}`,
    },
  });
};

export default Service;
