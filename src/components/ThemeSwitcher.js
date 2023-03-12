import { useState } from "react";

const ThemeSwitcher = ({ theme, setTheme }) => {
  const [moveBall, setMoveBall] = useState();

  return (
    <div className="switch">
      <div className="switch-radios">
        <input
          onChange={() => {
            setMoveBall(3);
            setTheme("");
          }}
          type="radio"
          name="theme-type"
          value="one"
          id="first"
        />
        <input
          onChange={() => {
            setMoveBall(27);
            setTheme("light-theme");
          }}
          type="radio"
          name="theme-type"
          value="two"
          id="second"
        />
        <input
          onChange={() => {
            setMoveBall(52);
            setTheme("purple-theme");
          }}
          type="radio"
          name="theme-type"
          value="three"
          id="third"
        />
      </div>

      <div className="ball" style={{ left: moveBall }}></div>
    </div>
  );
};

export default ThemeSwitcher;
