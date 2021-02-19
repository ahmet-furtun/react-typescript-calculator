import React, { FC, useState } from "react";

import "./calculator.page.css";

import {
  CalculatorKeys,
  CalculatorKeysDataObject,
} from "../../common/types/calculator.data";

const Calculator: FC = () => {
  const [equation, setEquation] = useState("0");
  const [result, setResult] = useState("0");

  return (
    <div className="container">
      <div className="calculator-container">
        <div className="result-screen">
          <div className="equation">{equation}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons-screen">
          {CalculatorKeysDataObject.map(
            (item: CalculatorKeys, index: number) => {
              return (
                <div className={item.className} key={index}>
                  {item.value}
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="footer">Simple Calculator</div>
    </div>
  );
};

export default Calculator;
