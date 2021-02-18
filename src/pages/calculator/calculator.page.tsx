import React, { FC } from "react";
import "./calculator.page.css";

const Calculator: FC = () => {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="result-screen"></div>
        <div className="functionality-container">
          <div className="erase-container"></div>
          <div className="down-keys-container">
            <div className="number-container"></div>
            <div className="operator-container">
                <span>+</span>
                <span>-</span>
                <span>/</span>
                <span>x</span>
                <span>=</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
