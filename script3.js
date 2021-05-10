var num1 = +prompt('Введите перво число');
var num2 = +prompt('Введите второе число');
var num3 = +prompt('Введите третье число');
if (num1 < num2 && num2 < num3) {
    alert(num2);
} else if (num2 < num1 && num1 < num3) {
    alert(num1);
} else if (num1 < num3 && num3 < num2) {
    alert(num3);
} else if (num3 < num1 && num1 < num2) {
    alert(num1);
}
else {
    alert('Error');
}