import GameSessionPlayer from "./GameSessionPlayer";

const GameSessionPlayers = (props) => {
  return props.players.map((playerName, index) => {
    return <GameSessionPlayer playerName={playerName} key={index} />;
  });
};

export default GameSessionPlayers;
