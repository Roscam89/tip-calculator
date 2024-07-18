import { useState } from "react";
import "./index.css";
const tipArr = [
  ["Dissatisfied (0%)", 0],
  ["It was ok (5%)", 5],

  ["It was good (10%)", 10],
  ["Absolutely amazing! (20%)", 20],
];

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [tips, SetTips] = useState(0);
  const [ftips, SetFTips] = useState(0);

  return (
    <div className="app">
      <InputField inputValue={inputValue} setInputValue={setInputValue} />
      <Tip
        tips={tips}
        SetTips={SetTips}
        text={"How did you like the service?"}
      />
      <Tip
        tips={ftips}
        SetTips={SetFTips}
        text={"How did your friend like the service?"}
      />
      <DisplayTotalAndTip
        inputValue={inputValue}
        setInputValue={setInputValue}
        tips={tips}
        SetTips={SetTips}
        ftips={ftips}
        SetFTips={SetFTips}
      />
      <Reset inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

function InputField({ inputValue, setInputValue }) {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="inpt">
      How much was the bill?
      <input value={inputValue} onChange={handleChange}></input>
    </div>
  );
}

function Tip({ SetTips, tips, text, SetFTips }) {
  const handleTip = (e) => {
    console.log(e.target.value);
    SetTips(Number(e.target.value));
  };

  return (
    <div>
      {text}
      <select onChange={handleTip}>
        {tipArr.map((el, i) => {
          return (
            <option value={el[1]} key={i}>
              {" "}
              {el[0]}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function DisplayTotalAndTip({ inputValue, tips, ftips }) {
  const calcTip = (inputValue * ((tips + ftips) / 2)) / 100;
  if (inputValue > 0) {
    return (
      <div>
        <b>
          You pay ${Number(inputValue) + calcTip} (${inputValue} + ${calcTip}
          {" tip "}
        </b>
        )
      </div>
    );
  }
}

function Reset({ inputValue, setInputValue }) {
  return <button onClick={() => setInputValue(0)}>Reset</button>;
}

export default App;
