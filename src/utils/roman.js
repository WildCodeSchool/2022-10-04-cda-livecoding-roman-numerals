const romanDigits = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const validDigits = ["IV", "IX", "XL", "XC", "CD", "CM"];

const romanToDecimal = (str) => {
  const splittedStr = str.split("");

  const tooManyChars = splittedStr.reduce(
    (prev, curr) => {
      const newObj = {
        ...prev,
      };

      if (newObj.lastCharUsed !== "M") {
        if (newObj.nbUsed > 3) {
          return prev;
        }
      } else {
        if (newObj.nbUsed > 4) {
          return prev;
        }
      }

      if (prev.lastCharUsed === curr) {
        newObj.nbUsed = prev.nbUsed + 1;
      } else {
        newObj.lastCharUsed = curr;
        newObj.nbUsed = 1;
      }

      return newObj;
    },
    { lastCharUsed: "", nbUsed: 0 }
  );

  const errorMsg = `Too many chars: '${
    tooManyChars.lastCharUsed
  }' used more than ${tooManyChars.nbUsed - 1} times!`;

  if (tooManyChars.lastCharUsed !== "M") {
    if (tooManyChars.nbUsed > 3) {
      return errorMsg;
    }
  } else {
    if (tooManyChars.nbUsed > 4) {
      return errorMsg;
    }
  }

  let total = 0;

  for (let i = 0; i < splittedStr.length; i++) {
    if (
      splittedStr[i + 1] &&
      romanDigits[splittedStr[i + 1]] > romanDigits[splittedStr[i]]
    ) {
      const pair = `${splittedStr[i]}${splittedStr[i + 1]}`;

      if (validDigits.includes(pair)) {
        total += romanDigits[splittedStr[i + 1]] - romanDigits[splittedStr[i]];
        i++;
        continue;
      } else {
        return `Invalid pair: ${pair}`;
      }
    }

    total += romanDigits[splittedStr[i]];
  }

  if (isNaN(total)) {
    return `Are you sure "${str}" is a roman number?`;
  }

  return total;
};

export { romanToDecimal };
