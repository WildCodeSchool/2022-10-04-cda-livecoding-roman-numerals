import { useEffect, useState } from "react";
import { romanToDecimal } from "../utils/roman";

const Converter = () => {
  const [roman, setRoman] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (roman.length > 0) {
      setText(romanToDecimal(roman));
    } else {
      setText("...");
    }
  }, [roman]);

  return (
    <>
      <h1>{"Renseignez un chiffre romain:"}</h1>

      <input
        type="text"
        value={roman}
        onChange={(e) => {
          setRoman(e.target.value.trim());
        }}
      />

      <br />
      <br />

      <b>
        <span>{text}</span>
      </b>
    </>
  );
};

export default Converter;
