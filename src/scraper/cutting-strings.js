// const testString = "סלט איטלקי";
//TODO: function sould receive 2 params - aString, stringToRemove
 

//test:
const testString = "בוראטה איטלקית עם עגבניות";
const testString2 = "סנדוויץ עיראקי";
const testString3 = "איטליה איטלקי באגט עגבניות";
const testString4 = "איט מרק בשר איטלקי";
const testString5 = "עיראק מרק שמן";

const VAL = "איטל";
const VAL2 = "עיראק";

const stringToRemove = (val)=>{
   return val.split("").reverse().join("");
}

const cutStrings = (aString,toRemove) => {
    const strToRemove =stringToRemove(toRemove);
    const reversedStringArr = aString.split("").reverse().join("").split(" ");
    const newArr = [];
    reversedStringArr.forEach((word) => {
        if (!word.includes(strToRemove)) {
            newArr.push(word);
        }
    })
    console.log(newArr.join(" "));
    return newArr.join(" ");
}


cutStrings(testString,VAL);
cutStrings(testString2,VAL2);
cutStrings(testString3,VAL);
cutStrings(testString4,VAL);
cutStrings(testString5,VAL2);


module.exports = cutStrings;