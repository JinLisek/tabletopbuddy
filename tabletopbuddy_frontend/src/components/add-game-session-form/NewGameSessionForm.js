import { Form, Button } from "react-bootstrap";

import GameNameFormGroup from "./GameNameFormGroup";
import AddPlayerToGameSession from "./AddPlayerToGameSession";
import GameSessionPlayers from "./GameSessionPlayers";

const NewGameSessionForm = (props) => {
  return (
    <Form onSubmit={props.submitCallback}>
      <GameNameFormGroup gameNameChangeCallback={props.gameNameChangeCallback} />
      <GameSessionPlayers players={props.players} />
      <AddPlayerToGameSession addPlayerCallback={props.addPlayerCallback} />
      <Button variant="primary" type="submit">
        Add game session
      </Button>
    </Form>
  );
};

export default NewGameSessionForm;
