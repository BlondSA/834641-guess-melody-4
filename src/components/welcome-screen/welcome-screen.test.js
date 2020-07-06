import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const errorsCountTest = 3;

describe(`WelcomeScreen`, () => {
  it(`Should WelcomeScreen render correctly`, () => {
    const tree = renderer.create(
        <WelcomeScreen
          errorsCount={errorsCountTest}
          onWelcomeButtonClick={() => {}}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

