import React from "react";
import renderer from "react-test-renderer";
import "react-test-renderer/shallow";
import NamedText from "../NamedText";

describe("NamedText tests", () => {
  it("Default type for input should be text", () => {
    const component = renderer.create(<NamedText />);
    const tree = component.toJSON();
    const [, input] = tree.children;
    expect(input.props["type"]).toEqual("text");
  });

  it("Type from props should set on input", () => {
    const component = renderer.create(<NamedText type="password" />);
    const tree = component.toJSON();
    const [, input] = tree.children;
    expect(input.props["type"]).toEqual("password");
  });

  it("By default label should be empty", () => {
    const component = renderer.create(<NamedText />);
    const tree = component.toJSON();
    const [label] = tree.children;
    expect(label.children).toEqual(null);
  });

  it("Label from props should be set in label", () => {
    const labelName = "some label text";
    const component = renderer.create(<NamedText name={labelName} />);
    const tree = component.toJSON();
    const [label] = tree.children;
    expect(label.children).toEqual([labelName]);
  });
});
