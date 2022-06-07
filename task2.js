let count_money = 22;
let number = count_money % 10;

if (count_money > 4 && count_money < 21) {
    console.log(count_money + ' рублей')
} else if (number === 1) {
    console.log(count_money + ' рубль')
} else if (number > 1 && number < 5) {
    console.log(count_money + ' рубля')
} else {
    console.log(count_money + ' рублей')
}