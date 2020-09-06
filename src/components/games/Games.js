import React, { useEffect, useState, useLayoutEffect } from "react";
import { getGames } from "api/games";

const Games = () => {
  const [games, setGames] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    fetchTopGames();
  }, []);

  useLayoutEffect(() => {
    checkScreen();
  }, [windowWidth]);

  const checkScreen = () => {
    setIsMobile(false);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    if (windowWidth < 600) {
      setIsMobile(true);
    }
  };

  const fetchTopGames = async () => {
    const games = await getGames();
    setGames(games);
  };

  const addSizeToImg = (url) => {
    const widthReplaced = url.replace(/{width}/, isMobile ? 300 : 400);
    const heightReplaced = widthReplaced.replace(
      /{height}/,
      isMobile ? 440 : 600
    );
    return heightReplaced;
  };

  return (
    <div className="gamesContainer">
      {games.map((game) => (
        <div key={game.id} className="game">
          <p>{game.name}</p>
          <img data-testid="artBoxUrl" src={addSizeToImg(game.box_art_url)} />
        </div>
      ))}
    </div>
  );
};

export default Games;
