const userName = prompt('Как вас зовут?')
const userAge = prompt('Сколько вам лет?')
console.log(userName.trim().toLowerCase())
alert(Number(userAge.trim()))
alert(`Вас зовут ${userName} и вам ${userAge} лет`)

