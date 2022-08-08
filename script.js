let username = prompt('Введите свое имя:')
console.log('username')
let myTitle = document.getElementById('title')
if (username) {
    myTitle.innerHTML = "Ваш список дел, " + "" + username + ":"
}
else {
    myTitle.innerHTML = "Список дел анонимного пользователя"
}


let count = 0
function add() {

let myError =  document.getElementById("error")
count = count + 1

if (count > 5) {
    myError.innerHTML = "Можно ввести до 5 дел" 
    return
}
else {

console.log('count')
 const input = document.getElementById("input")
const task = input.value

let list = document.getElementById("list")
list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>"
}
}