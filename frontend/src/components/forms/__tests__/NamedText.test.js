import React from "react";
import renderer from "react-test-renderer";
import NamedText from "../NamedText";

describe("NamedText tests", () => {
  test("Default type for input should be text", () => {
    const component = renderer.create(<NamedText />);
    const tree = component.toJSON();
    const [, input] = tree.children;
    expect(input.props["type"]).toEqual("text");
  });

  test("Type from props should set on input", () => {
    const component = renderer.create(<NamedText type="password" />);
    const tree = component.toJSON();
    const [, input] = tree.children;
    expect(input.props["type"]).toEqual("password");
  });
});
