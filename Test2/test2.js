function formatString(str) {
  let openingsCount = 0;
  let final = "";
  for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    let remainingString = str.slice(i);

    if (char === "(") {
      let remainingCloseCount = remainingString.split(")").length - 1;

      if (remainingCloseCount >= openingsCount) {
        final = final.concat(char);
        openingsCount++;
      }
    } else if (char === ")") {
      if (openingsCount > 0) {
        final = final.concat(char);
        openingsCount--;
      }
    } else {
      final = final.concat(char);
    }
  }

  console.log("--final", final);
}

formatString("))((((())))(((((((()(");
