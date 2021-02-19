import React, { FC } from "react";
import "./calculator.page.css";

const Calculator: FC = () => {
  return (
    <div className="container">
      <div className="calculator-container">
        <div className="result-screen"></div>
        <div className="buttons-screen">
          <div className="item1 CE">C</div>
          <div className="item2 DEL">DEL</div>
          <div className="item2 operator">/</div>

          <div className="item2 number">1</div>
          <div className="item2 number">2</div>
          <div className="item2 number">3</div>
          <div className="item2 operator">*</div>

          <div className="item2 number">4</div>
          <div className="item2 number">5</div>
          <div className="item2 number">6</div>
          <div className="item2 operator">+</div>

          <div className="item2 number">7</div>
          <div className="item2 number">8</div>
          <div className="item2 number">9</div>
          <div className="item2 operator">-</div>

          <div className="item1 number">0</div>
          <div className="item2 number">.</div>
          <div className="item2 operator">=</div>
        </div>
      </div>
      <div className="footer">Simple Calculator</div>
    </div>
  );
};

export default Calculator;
