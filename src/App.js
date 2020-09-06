import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components";
import { getGames } from "./api/games";

const App = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetchTopGames();
  }, []);

  const fetchTopGames = async () => {
    const resp = await getGames();
    setGames(resp.data.data);
  };

  const addSizeToImg = (url) => {
    const widthReplaced = url.replace(/{width}/, 400);
    const heightReplaced = widthReplaced.replace(/{height}/, 400);
    return heightReplaced;
  };

  const Games = () => {
    return <div className="gamesContainer"></div>;
  };

  return (
    <div className="container">
      <Header />
      <main>
        <ul>
          {games.map((game) => (
            <a>
              <li key={game.id}>
                {game.name}
                <img src={addSizeToImg(game.box_art_url)} />
              </li>
            </a>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
