const userText = prompt('Введите текст')
const wordFromText = prompt('Введите слово из текста')
const indexOfWord = userText.trim().indexOf(wordFromText.trim())
const string = userText.slice(0, indexOfWord)
alert(`Результат: ${string}`)

