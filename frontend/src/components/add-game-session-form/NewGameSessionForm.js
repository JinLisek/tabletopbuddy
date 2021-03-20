import { Form } from "react-bootstrap";

import NamedText from "../forms/NamedText";
import SubmitButton from "../forms/SubmitButton";
import AddPlayerToGameSession from "./AddPlayerToGameSession";
import GameSessionPlayers from "./GameSessionPlayers";

const NewGameSessionForm = (props) => {
  return (
    <Form onSubmit={props.submitCallback}>
      <NamedText name="Game name" textChangeCallback={props.gameNameChangeCallback} />
      <GameSessionPlayers players={props.players} />
      <AddPlayerToGameSession addPlayerCallback={props.addPlayerCallback} />
      <SubmitButton name="Add game session" />
    </Form>
  );
};

export default NewGameSessionForm;
