import { service } from "./service";

export const getStreams = async (gameId) => {
  const resp = await service.get(`streams/?game_id=${gameId}&language=pt`);
  return resp.data.data;
};
