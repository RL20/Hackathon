// const testString = "סלט איטלקי";
//TODO: function sould receive 2 params - aString, stringToRemove


// //test:
// const testString = "בוראטה איטלקית עם עגבניות";
// const testString2 = "סנדוויץ עיראקי";
// const testString3 = "איטליה איטלקי באגט עגבניות";
// const testString4 = "איט מרק בשר איטלקי";
// const testString5 = "עיראק מרק שמן";

// const VAL = "איטל";
// const VAL2 = "עיראק";
// const toRemove= ["איטל"]


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
    // console.log(newArr.join(" "));
    return newArr.join(" ");
}


// cutStrings(testString,VAL);
// cutStrings(testString2,VAL2);
// cutStrings(testString3,VAL);
// cutStrings(testString4,VAL);
// cutStrings(testString5,VAL2);


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
        case "ערב":
            return cutStrings(strin, "ערבי");
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

module.exports = { filterFunc };


