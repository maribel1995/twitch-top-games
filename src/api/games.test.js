import { getGames } from "./games";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
import "../testServer";
test("get game named League of Legends", async () => {
  const games = await getGames();
  expect(games[0].name).toEqual("League of Legends");
});
