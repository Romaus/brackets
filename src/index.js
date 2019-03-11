module.exports = function check(str, bracketsConfig) {
  let testStr = [];
  for (i = 0; i < str.length; i++) {
    testStr.push(str[i])
  }
  for (i = 0; i < bracketsConfig.length; i++) {
    let count = testStr.length;
    for (j = 0; j < testStr.length; j++) {
      if (testStr[j] == bracketsConfig[i][0] && testStr[j+1] == bracketsConfig[i][1]) {
        testStr.splice(j,2);
        j = -1;
      }
    }
    if (testStr.length < count) {
      i = -1;
    }
  }
  return !testStr.length;
}