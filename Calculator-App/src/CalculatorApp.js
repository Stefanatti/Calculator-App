import { useState } from "react";
import "./CalculatorApp.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

const CalculatorApp = () => {
  const [result, setResult] = useState("");
  const [formula, setFormula] = useState("");
  const [theme, setTheme] = useState("");

  const updateFormula = (str) => {
    if (str) {
      setFormula((prevFormula) => prevFormula + str);
    }
  };

  const handleReset = () => {
    setFormula("");
    setResult("");
  };

  const handleDel = () => {
    setFormula((prevFormula) => prevFormula.slice(0, prevFormula.length - 1));
  };

  const calculateResult = () => {
    let res = 0;
    let operation = "+";
    for (const part of formula.split(/([+\-/*])/g)) {
      switch (part) {
        case "+":
          operation = "+";
          break;
        case "-":
          operation = "-";
          break;
        case "/":
          operation = "/";
          break;
        case "*":
          operation = "*";
          break;
        default:
          if (operation === "+") {
            res += +part;
          } else if (operation === "-") {
            res -= +part;
          } else if (operation === "*") {
            res *= +part;
          } else if (operation === "/") {
            res /= +part;
          }
      }
    }
    setResult(res);
  };

  const NumberButton = (props) => (
    <button
      onClick={() => {
        updateFormula(props.num);
      }}
      className="btn"
    >
      {props.num}
    </button>
  );
  return (
    <div>
      <div className={`container app ${theme} `}>
        <div className="calc-container">
          <ThemeSwitcher setTheme={setTheme} theme={theme} />

          <div className="resultDiv">
            <h4 className="calc">{formula}</h4>
            <h1 className="result">{result}</h1>
          </div>
          <div className="numbersDiv">
            <NumberButton num="7" />
            <NumberButton num="8" />
            <NumberButton num="9" />
            <button
              onClick={() => {
                handleDel();
              }}
              className="btn delbtn"
            >
              DEL
            </button>
            <NumberButton num="4" />
            <NumberButton num="5" />
            <NumberButton num="6" />
            <NumberButton num="+" />
            <NumberButton num="1" />
            <NumberButton num="2" />
            <NumberButton num="3" />
            <NumberButton num="-" />
            <NumberButton num="." />
            <NumberButton num="0" />
            <NumberButton num="/" />
            <NumberButton num="*" />
            <button
              className="btn resetBtn delbtn"
              onClick={() => {
                handleReset();
              }}
            >
              RESET
            </button>
            <button
              onClick={() => {
                calculateResult();
              }}
              className="btn equalBtn"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
