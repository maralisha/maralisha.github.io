/*Написать функцию, которая создает пустой объект, но без прототипа.*/
function Obj(){
    return Object.create(null);
}