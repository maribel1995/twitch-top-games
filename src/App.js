import React, { useEffect, useState } from "react";
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

  return (
    <main>
      <h1>Top Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;
