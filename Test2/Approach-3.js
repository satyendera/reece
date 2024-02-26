function reformString(str) {
  let stack = [];
  let stackOpenPosition = [];
  let stackClosePosition = [];
  let plainString = [];
  let finalString = "";
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] !== "(" && str[i] !== ")") {
      plainString.push(str[i]);
    } else if (
      str[i] === ")" &&
      stackClosePosition.length < stackOpenPosition.length
    ) {
      stackClosePosition.push(i);
    } else if (str[i] === "(") {
      stack.push(str[i]);
      stackOpenPosition.push(i);
    }
  }
  console.log(stack, stackOpenPosition, stackClosePosition, plainString);

  let maxLen = Math.max(...stackClosePosition); //stackClosePosition.length+stackOpenPosition.length+plainString.length;//Math.max(...stackClosePosition);

  // if(maxLen < plainString.length) {
  //   maxLen = plainString.length;
  // }

  console.log(maxLen);

  // stackOpenPosition.reverse();
  // stackClosePosition.reverse();

  console.log(stackOpenPosition, stackClosePosition);

  //@TODO convert array into object where key and values are same

  for (let j = 0; j < maxLen; j++) {
    console.log(plainString[j]);
    if (stackOpenPosition[j]) {
      console.log("1st I am here" + j);
      finalString += "(";
    } else if (stackClosePosition[j]) {
      console.log("2nd I am here" + j);
      finalString += ")";
    }
    if (plainString[j]) {
      console.log("I am here" + j);
      finalString += plainString[j];
    }
  }
  console.log(finalString);
  return finalString;
}

reformString("ju(s(t)i)n)");
