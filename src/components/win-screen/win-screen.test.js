import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen.jsx";

describe(`<WinScreen/> render correctly`, () => {
  it(`Render 3 question 0 mistakes`, () => {
    const tree = renderer
      .create(
          <WinScreen
            mistakesCount={0}
            questionCount={3}
            onReplayButtonClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render 3 question 1 mistakes`, () => {
    const tree = renderer
      .create(
          <WinScreen
            mistakesCount={1}
            questionCount={3}
            onReplayButtonClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render 0 question 0 mistakes`, () => {
    const tree = renderer
      .create(
          <WinScreen
            mistakesCount={0}
            questionCount={0}
            onReplayButtonClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render 100 question 5 mistakes`, () => {
    const tree = renderer
      .create(
          <WinScreen
            mistakesCount={0}
            questionCount={100}
            onReplayButtonClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
