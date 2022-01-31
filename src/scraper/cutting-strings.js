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
    case ("גרוז", "גיאורג"):
      return cutStrings(string, "גרוזיני/גיאורגי");
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
    default:
      break;
  }
};

module.exports = { filterFunc };
