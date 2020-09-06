import { rest } from "msw";
import { setupServer } from "msw/node";

const testGetGames = setupServer(
  rest.get("https://api.twitch.tv/helix/games/top", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: "21779",
            name: "League of Legends",
            box_art_url:
              "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-{width}x{height}.jpg",
          },
        ],
      })
    );
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." })
    );
  })
);

beforeAll(() => testGetGames.listen());
afterAll(() => testGetGames.close());
afterEach(() => testGetGames.resetHandlers());

export { testGetGames, rest };
