const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
const halfOfString = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length/2))
    .replaceAll('а', 'А')
    .replaceAll(' ', '')
    .repeat(3)
    .substring(Math.floor((javaScriptDescription.length - 1)/2))
const target = halfOfString[Math.floor((halfOfString.length - 1)/2)]
console.log(target)

