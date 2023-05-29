// Создайте функцию handler, которая принимает в качестве аргумента массив с положительными и отрицательнцми числами, формирует новый массив, в котором все отрицательные значения преобразованы в положительные и возращает новый массив.
// Для решения задачи используйте метод массива map.

// const arr = [1, 5, -2, 3, -7, -3, 9];
// const handler = arr.map(function(elem){
//     if(elem < 0){
//         return elem = - elem;
//     }else{
//         return elem
//     }
// })
// console.log(handler);



// Создайте функцию handler, которая принимает в качестве аргумента массив с положительными числами, формирует новый массив, из которого исключены числа, равные своему индексу в массиве.
// Для решения задачи используйте метод массива filter и indexOf.

// const arr = [1, 5, 2, 6, 9, 17, 8, 7];
// const handler = arr.filter(function(elem, index){
// 	return elem !== index;
// })
// console.log(handler);
//   -----------------------------------
// const arr = [1, 5, 2, 6, 9, 17, 8, 7];
// const handler = arr.filter(function(elem){
// 	if(elem !== arr.indexOf(elem)){
//         return elem 
//     }
// })
// console.log(handler);
//  -------------------------------------
// const arr = [1, 5, 2, 6, 9, 17, 8, 7];
// const handler = arr.filter((elem) => elem !== arr.indexOf(elem))
// console.log(handler)


// Создайте функцию handler, которая принимает в качестве аргумента массив с положительными числами, формирует новый массив после дедупликации (удалены все повторяющиеся числа).
// Для решения задачи используйте метод массива filter.

// const arr = [1, 5, 7, 2, 6, 9, 17, 2, 8, 7];
// const handler = arr.filter(function(elem, index){
//     return arr.indexOf(elem) === index;
// })
// console.log(handler)
// --------------------------------
// const arr = [1, 5, 7, 2, 6, 9, 17, 2, 8, 7];
// const handler = arr.filter((elem, index) =>  arr.indexOf(elem) === index)
// console.log(handler)


// Создайте функцию handler, которая принимает в качестве аргумента массив со строками и возвращает новый массив из длинн этих строк. 
// Для решения задачи используйте метод массива map.

// const arr = [
//     {string:'В лесу родилась елочка'},
//     {string:'В лесу она росла'},
//     {string:'Зимой и летом стройная'},
//     {string:'Зеленая была'}
// ]
// const handler = arr.map(function({string}){
//     return string.length
// })
// console.log(handler)
//   -------------------------------
// const handler = arr.map(({string}) => string.length)
// console.log(handler)
//   ------------------------------- 
// const arr = ['В лесу родилась елочка', 'В лесу она росла', 'Зимой и летом стройная', 'Зеленая была'];
// const handler = arr.map((elem) => elem.length)
// console.log(handler);


// Создайте функцию handler, которая принимает в качестве аргументов массив с числами и строками и число.
// Функция должна в первую очередь отфильтровать массив и оставить только числа. На основе полученного после фильтрации массива необходимо сформировать массив, в котором все числа возведены в степен числа, полученного в качестве второго аргумента функции handler.
// Для решения задачи используйте методы массива filter и map.

// const arr = ['один', 7, 3, 'пять', 4, 'семь', 5, 'девять'];
// const num = 5;
// const handler = arr.filter((elem) => typeof elem === 'number');
// const result = handler.map((number) => number ** num);
// console.log(result);
//  ---------------------------------------------

const arr = ['один', 7, 3, 'пять', 4, 'семь', 5, 'девять'];
const num = 5;
 const handler = arr
   .filter(function (elem) {
     return typeof elem === 'number';
   })
   .map(function (number) {
     return number ** num
   });

 console.log(handler);