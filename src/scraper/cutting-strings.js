const stringToRemove = (val) => {
  return val.split("").join("");
};
const cutStrings = (aString, toRemove) => {
  const strToRemove = stringToRemove(toRemove);
  const reversedStringArr = aString.split("").join("").split(" ");
  const newArr = [];
  reversedStringArr.forEach((word) => {
    if (!word.includes(strToRemove)) {
      newArr.push(word);
    }
  });
  return newArr.join(" ");
};
const filterFunc = (origin, string) => {
  switch (origin) {
    case "איטלקי":
      return cutStrings(string, "איטל");
    case "עיראקי":
      return cutStrings(string, "עיראק");

    case "גרוזיני/גיאורגי":
      return cutStrings(string, "גיאור");

    case "פרסי":
      return cutStrings(string, "פרסי");
    case "ערבי":
      return cutStrings(string, "ערב");
    case "ישראלי":
      return cutStrings(string, "ישראל");
    case "תימני":
      return cutStrings(string, "תימני");
    case "סיני":
      return cutStrings(string, "סיני");
    case "מקסיקני":
      return cutStrings(string, "מקסיק");
    case "טריפוליטאי":
      return cutStrings(strin, "טריפול");
    case "צרפתי":
      return cutStrings(strin, "צרפת");
    case "אמריקאי":
      return cutStrings(strin, "אמריק");
    case "מרוקאי":
      return cutStrings(strin, "מרוק");
    case "הודי":
      return cutStrings(strin, "הוד");
    case "יפני":
      return cutStrings(strin, "יפ");
    case "רומני":
      return cutStrings(strin, "רומנ");
    case "ספרדי":
      return cutStrings(strin, "ספרד");
    case "תאילנדי":
      return cutStrings(strin, "תאי");
    case "הונגרי":
      return cutStrings(strin, "הונג");
    case "אסייתי":
      return cutStrings(strin, "אסי");
    case "ארגנטינאי":
      return cutStrings(strin, "ארגנ");
    case "בוכרי":
      return cutStrings(strin, "בוכר");
    case "זרוזי":
      return cutStrings(strin, "דרוז");
    case "אפריקאי":
      return cutStrings(strin, "אפרי");
    case "טורקי":
      return cutStrings(strin, "טורק");
    case "רוסי":
      return cutStrings(strin, "רוס");
    case "יווני":
      return cutStrings(strin, "יוו");
    default:
      return string;
  }
};

module.exports = { filterFunc };
