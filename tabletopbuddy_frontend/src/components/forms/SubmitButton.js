import { Button } from "react-bootstrap";

const SubmitButton = (props) => {
  return (
    <Button variant="primary" type="submit">
      {props.name}
    </Button>
  );
};

export default SubmitButton;
