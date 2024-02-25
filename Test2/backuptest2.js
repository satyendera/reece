function reformString(str) {
  let newFinalString = "";
  let countofOpenbracket = 0;
  let countofClosebracket = 0;
  let remainingString = "";
  const len = str.length;
  for (let i = 0; i < len; i++) {
    // eslint-disable-next-line no-debugger
    debugger;
    if (str[i] !== "(" && str[i] !== ")") {
      newFinalString = newFinalString.concat(str[i]);
    } else if (str[i] == "(") {
      remainingString = str.slice(i);
      if (remainingString.split(")").length - 1 > 0) {
        newFinalString = newFinalString.concat(str[i]);
        countofOpenbracket = countofOpenbracket + 1;
      }
    } else if (str[i] === ")" && countofOpenbracket > 0) {
      if (countofClosebracket < countofOpenbracket) {
        newFinalString = newFinalString.concat(str[i]);
        countofClosebracket = countofClosebracket + 1;
      }
    }
  }
  console.log(newFinalString);
}

reformString("(())");
