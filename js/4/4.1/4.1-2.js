const myName = "Никита";
let programmingLanguage = "JavaScripts";
let beforeprogrammingLanguage = "Python";
const courseCreatorName = "Никиты Михайловича";
let reasonText = "Зарабатывать";
let numberOfMonth = "9";

programmingLanguage.toUpperCase();

const result = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования \
 ${programmingLanguage}. Сейчас я изучаю язык программирования ${programmingLanguage} ${courseCreatorName}. \ 
 Я хочу стать совком деняк, потому что ${reasonText}. До этого я изучал ${beforeprogrammingLanguage} \
 ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`;
console.log(result);






let myInfoText = result;

console.log(
  result.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
);
console.log(myInfoText.length);

console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);