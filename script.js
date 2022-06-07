function confirm() {
    let login = document.forms["register"].elements["login"].value;
    let email = document.forms["register"].elements["email"].value;
    let password = document.forms["register"].elements["password"].value;
    let confirm_password = document.forms["register"].elements["confirm_password"].value;

    if (~email.indexOf("ru")) {
        if (login.length === 20) {
            if (password === confirm_password) {
                console.log( 'Логин: ' + login + ' Эмэил: ' + email + ' Пароль: ' + password + 'Повтор пароля: ' + confirm_password);
            } else {
                alert('Пароли не совпадают');
            }
        } else {
            alert('Логин должен быть только 20 символов в длину');
        }
    } else {
        alert('Email должен быть в ru сегменте');
    }
}