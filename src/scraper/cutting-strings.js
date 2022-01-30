// const testString = "סלט איטלקי";
//TODO: function sould receive 2 params - aString, stringToRemove
 
const testString = "בוראטה איטלקית עם עגבניות";
const testString2 = "סנדוויץ עיראקי";
const testString3 = "בוראטה איטלקית";

const VAL = "איטל";
const stringToRemove = VAL.split("").reverse().join("");

const cutStrings = (aString) => {
    const reversedStringArr = aString.split("").reverse().join("").split(" ");
    const newArr = [];
    reversedStringArr.forEach((word) => {
        if (!word.includes(stringToRemove)) {
            newArr.push(word);
        }
    })
    console.log(newArr);
    return newArr;
}


cutStrings(testString);
cutStrings(testString2);