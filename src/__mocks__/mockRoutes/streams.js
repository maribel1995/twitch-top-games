import { rest } from "msw";

export const getStreams = rest.get(
  "https://api.twitch.tv/helix/streams",
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: "549786866",
            user_id: "459331509",
            user_name: "auronplay",
            game_id: "32982",
            type: "live",
            title: "👽 EVENTO GTA V ROLEPLAY, LA PUUUURGA 👽",
            viewer_count: 91786,
            started_at: "2020-09-07T13:59:04Z",
            language: "es",
            thumbnail_url:
              "https://static-cdn.jtvnw.net/previews-ttv/live_user_auronplay-{width}x{height}.jpg",
            tag_ids: ["d4bb9c58-2141-4881-bcdc-3fe0505457d1"],
          },
        ],
      })
    );
  }
);
