/*Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».*/

let X = 10;
let result = typeof X;
switch(result) {
	case 'number':
	console.log('this is number');
	break;
	case 'string':
	console.log('this is string');
	break;
	case 'boolean':
	console.log('this is boolean');
	default:
	console.log('undefined');
}