import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getGames } from "api/games";
import { addSizeToImg } from "utils/addSizeToImg";

const Games = ({ isMobile }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchTopGames();
  }, []);

  const fetchTopGames = async () => {
    const games = await getGames();
    setGames(games);
  };

  return (
    <div className="gamesContainer">
      {games.map((game) => (
        <NavLink key={game.id} to={`streams/${game.id}`}>
          <div className="game">
            <p>{game.name}</p>
            <img
              data-testid="artBoxUrl"
              src={addSizeToImg(game.box_art_url, isMobile, "topGames")}
            />
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Games;
