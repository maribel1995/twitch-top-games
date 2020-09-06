import { service } from "./service";

export const getGames = async () => {
  const resp = await service.get("games/top");
  return resp.data.data;
};
