import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

const errorsCountTest = 3;

describe(`WelcomeScreen`, () => {
  it(`Should welcome button be pressed`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = mount(
        <WelcomeScreen
          errorsCount={errorsCountTest}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`, {preventDefault() {}});

    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
