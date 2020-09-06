import Service from "./service";

const service = Service();
export const getGames = () => {
  return service.get("games/top");
};
