let array_book = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l']];
let number_shelf = 1;
for (let i = 0; i < array_book.length; i++) {
    console.log('На полке № '+ (number_shelf++) + ' ' + array_book[i]);
}