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
      return cutStrings(string, "טריפול");
    case "צרפתי":
      return cutStrings(string, "צרפת");
    case "אמריקאי":
      return cutStrings(string, "אמריק");
    case "מרוקאי":
      return cutStrings(string, "מרוק");
    case "הודי":
      return cutStrings(string, "הוד");
    case "יפני":
      return cutStrings(string, "יפ");
    case "רומני":
      return cutStrings(string, "רומנ");
    case "ספרדי":
      return cutStrings(string, "ספרד");
    case "תאילנדי":
      return cutStrings(string, "תאי");
    case "הונגרי":
      return cutStrings(string, "הונג");
    case "אסייתי":
      return cutStrings(string, "אסי");
    case "ארגנטינאי":
      return cutStrings(string, "ארגנ");
    case "בוכרי":
      return cutStrings(string, "בוכר");
    case "זרוזי":
      return cutStrings(string, "דרוז");
    case "אפריקאי":
      return cutStrings(string, "אפרי");
    case "טורקי":
      return cutStrings(string, "טורק");
    case "רוסי":
      return cutStrings(string, "רוס");
    case "יווני":
      return cutStrings(string, "יוו");
    default:
      return string;
  }
};

module.exports = { filterFunc };
