var age = +prompt('Введите свой возраст');
if (18 >= age > 0) {
    alert('Вы еще молоды. Вам нужно учится');
} else if (50 >= age && age > 18) {
    alert('Вам нужно работать');
} else if (59 >= age && age > 50) {
    alert('Вам скоро на пенсию');
} else if (150 >= age && age > 59) {
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так');
}