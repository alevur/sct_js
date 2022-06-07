let arr = [1,2,3,4,5,6];
let is_sort = 'Массив отсортирован';

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]){
        is_sort ='Массив не отсортирован';
        break;
    }
}

console.log(is_sort);