import { getGames } from "./games";

import "__mocks__/testServer";

test("get game named League of Legends", async () => {
  const games = await getGames();
  expect(games[0].name).toEqual("League of Legends");
});
