const stringToRemove = (val) => {
    return val.split("").join("");
}

const cutStrings = (aString, toRemove) => {
    const strToRemove = stringToRemove(toRemove);
    const reversedStringArr = aString.split("").join("").split(" ");
    const newArr = [];
    reversedStringArr.forEach((word) => {
        if (!word.includes(strToRemove)) {
            newArr.push(word);
        }
    })
    return newArr.join(" ");
}


const filterFunc = (origin, strin) => {
    switch (origin) {
        case "איטלקי":
            return cutStrings(strin, "איטל");
        case "עיראקי":
            return cutStrings(strin, "עיראק");
        case "גרוז", "גיאורג":
            return cutStrings(strin, "גרוזיני/גיאורגי");
        case "פרסי":
            return cutStrings(strin, "פרסי");
        case "ערבי":
            return cutStrings(strin, "ערב");
        case "ישראלי":
            return cutStrings(strin, "ישראל");
        case "תימני":
            return cutStrings(strin, "תימני");
        case "סיני":
            return cutStrings(strin, "סיני");
        case "מקסיקני":
            return cutStrings(strin, "מקסיק");
        default:
            break;
    }
}

// console.log(filterFunc("מקסיקני", "אוכל מקסיקני"));
module.exports = { filterFunc };


