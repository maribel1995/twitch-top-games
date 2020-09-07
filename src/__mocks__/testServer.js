import { rest } from "msw";
import { setupServer } from "msw/node";
import { getGames, getStreams } from "./mockRoutes";

const server = setupServer(
  getGames,
  getStreams,
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
