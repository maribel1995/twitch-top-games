import { getStreams } from "./streams";
import "__mocks__/testServer";

test("get stream title named 👽 EVENTO GTA V ROLEPLAY, LA PUUUURGA 👽", async () => {
  const streams = await getStreams();
  expect(streams[0].title).toEqual("👽 EVENTO GTA V ROLEPLAY, LA PUUUURGA 👽");
});
