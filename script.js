$(document).ready(function (){
    let driversCars = new Map();//ассоциативный массив для таблицы Водитель-Машина
    let carsPenalty = new Map();//ассоциативный массив для таблицы Машина-Штраф
    let driversPenalty = new Map();//ассоциативный массив для таблицы Водитель-Штраф

    //получаем ассоциативный массив Водитель-Машина
    $('.driver-car td:first-child').each(function() {
        let key = ($(this).attr('car'));
        let value = ($(this).text());
        driversCars.set(key, value);
    });

    //получаем ассоциативный массив Машина-Штраф
    $('.car-penalty td:last-child').each(function() {
        let key = ($(this).attr('car'));
        let value = ($(this).text());
        carsPenalty.set(key, value);

    });

    //получаем ассоциативный массив Водитель-Штраф
    driversCars.forEach(function(value1,key1) {
        carsPenalty.forEach(function(value2,key2) {
            if (key1 === key2) {
                driversPenalty.set(value2,value1);
            }
        });
    });

    driversPenalty.forEach(function(key2,value2) {
        $('.driver-penalty').append('<tr><td>' + key2+ '</td><td>' + value2 + '</td></tr>');
        console.log(key2 + ' ' + value2);
    });
});
