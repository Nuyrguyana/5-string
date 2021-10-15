const myName = 'Яна'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилена Минина'
const reasonText = 'мне нравиться визуализация и сфера IT'
const numberOfMonth = '2 месяца'

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth}. Я уверена, что пройду данный курс до конца!`
console.log(myInfoText)

const myInfoText1 = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
console.log(myInfoText1)

console.log(myInfoText.length)
console.log(myInfoText[0], myInfoText[myInfoText.length-1])
