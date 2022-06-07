function ndfl() {
    let salary = prompt('Введите зарплату сотрудника');
    let precentNdfl = 0.13;
    let ndfl = (salary) => {
        let result = salary * precentNdfl;
        result = Number(result.toFixed(2));
        let rub = Math.floor(result);
        let kop = (result - rub) * 100;

        return rub + ' руб. ' + kop.toFixed() + ' коп.';

    }
    alert(ndfl(salary));
}