import { addSizeToImg } from "./addSizeToImg";

const url =
  "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-{width}x{height}.jpg";

test("adding mobile size to topGames", () => {
  expect(addSizeToImg(url, true, "topGames")).toBe(
    "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-300x440.jpg"
  );
});

test("adding mobile size to streams", () => {
  expect(addSizeToImg(url, true, "streams")).toBe(
    "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-400x200.jpg"
  );
});

test("adding desktop size to topGames", () => {
  expect(addSizeToImg(url, false, "topGames")).toBe(
    "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-400x600.jpg"
  );
});

test("adding desktop size to streams", () => {
  expect(addSizeToImg(url, false, "streams")).toBe(
    "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-200x300.jpg"
  );
});
