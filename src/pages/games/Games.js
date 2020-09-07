import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getGames } from "api/games";
import { addSizeToImg } from "utils/addSizeToImg";
import { FakeCard } from "components/fakeCard";

const Games = ({ isMobile }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchTopGames();
  }, []);

  const fetchTopGames = async () => {
    const games = await getGames();
    setGames(games);
    setIsLoading(false);
  };

  const renderGames = () => {
    return games.map((game) => (
      <NavLink key={game.id} to={`streams/${game.id}`}>
        <div className="game">
          <p>{game.name}</p>
          <img
            data-testid="artBoxUrl"
            src={addSizeToImg(game.box_art_url, isMobile, "topGames")}
            loading="lazy"
          />
        </div>
      </NavLink>
    ));
  };

  const renderFakeCards = () => {
    return [...new Array(10)].map((el, i) => (
      <FakeCard key={i} isMobile={isMobile} page={"topGames"} />
    ));
  };

  return (
    <div className="gamesContainer">
      {isLoading ? renderFakeCards() : renderGames()}
    </div>
  );
};

export default Games;
