function calculator() {
    let numbers = prompt('Введите числа через пробел');
    let arrayNumbers = numbers.split(' ');
    let action = prompt('Введите желаемое действие:  +, -, *, /, ^ ,sqrt');
    let answer;

    if (action === '+') {
        answer = arrayNumbers.reduce(function (a, b) {
            return Number(a) + Number(b);
        });

    } else if (action === '-') {
        answer = arrayNumbers.reduce(function (a, b) {
            return Number(a) - Number(b);
        });
    } else if (action === '*') {
        answer = arrayNumbers.reduce(function (a, b) {
            return Number(a) * Number(b);
        });
    } else if (action === '/') {
        answer = arrayNumbers.reduce(function (a, b) {
            return Number(a) / Number(b);
        });
    }else if (action === '^') {
        let exponentiation = prompt('В какую степень возвести?');
        answer = Number(arrayNumbers[0]) ** Number(exponentiation);
    }else if (action === 'sqrt') {
        answer = Math.sqrt(Number(arrayNumbers[0]));
    }

    alert('Результат равен: ' + answer);
}

