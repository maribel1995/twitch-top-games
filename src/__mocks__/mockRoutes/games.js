import { rest } from "msw";

export const getGames = rest.get(
  "https://api.twitch.tv/helix/games/top",
  (_req, res, ctx) => {
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
  }
);
