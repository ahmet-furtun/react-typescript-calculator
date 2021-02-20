import React, { FC, useState } from "react";

import "./calculator.page.css";

import {
  CalculatorKeys,
  CalculatorKeysDataObject,
} from "../../common/types/calculator.data";
import { parse } from "url";

const Calculator: FC = () => {
  const [equation, setEquation] = useState("0");
  const [result, setResult] = useState("0");
  const [lastResult, setLastResult] = useState("0");

  const keyPress = (item: CalculatorKeys) => {
    let isNum = /^\d+$/.test(item.value);
    let converter: number = 0;
    if (isNum || item.value === ".") {
      if (item.value === "." && result.includes(".")) return;
      if (result !== "0") setResult(result + item.value);
      else setResult(item.value);
    } else if (item.value === "C" || item.value === "DEL") {
      if (item.value === "C") {
        setResult("0");
        setEquation("0");
        setLastResult("0");
      } else {
        setResult(result.slice(0, -1));
      }
    } else {
      if(item.value === '+'){
        converter = parseInt(lastResult);
        converter += parseInt(result);
      } else if (item.value === '-'){
        converter = parseInt(lastResult);
        converter -= parseInt(result);
      }else if (item.value === '*'){
        converter = parseInt(lastResult);
        converter *= parseInt(result);
      }else if (item.value === '/'){
        converter = parseInt(lastResult);
        converter /= parseInt(result);
      }
      if (item.value === '='){
        setResult("result(" + lastResult +')');
        setEquation("0");
        setLastResult("0");
      } else {
        setEquation(converter.toString());
        setLastResult(converter.toString());
        setResult("0");
      }
      
    }
  };

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
                <div
                  className={item.className}
                  key={index}
                  onClick={() => {
                    keyPress(item);
                  }}
                >
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
