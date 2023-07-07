let password = "5555"
let attemps = 5
let i = 1
let input
do {
    input = prompt("Enter your password")
    if (input === null) {
        break;
    }
    if (input === password) {
        alert("Здравствуйте!")
        break;
    } else if (i < attemps) {
        alert(`Неверный пароль, у вас ${attemps - i} попыток!`)
    } else {
        alert("Попытки закончились, доступ заблокирован!")
    }
    i += 1
}
while (attemps >= i) {
}
let f = 1

function delay() {
    setTimeout(function () {
        f++;
        if (f < 100) {
            delay();
        }
    }, 1000)
    console.log(`hello ${f}`);
}
delay()