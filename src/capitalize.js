#!/usr/bin/env node

// const capitalize = (text) => {
//   if (text === "") {
//     return "";
//   }
//   const [firstChar, ...restChars] = text;
//   return `${firstChar.toUpperCase()}${restChars.join("")}`;
// };

const capitalize = (text) => {
  if (text === "") {
    return "";
  }
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};

export default capitalize;
