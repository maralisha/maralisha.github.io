/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/
 let map = new Map();
map.set('color', 'green');
map.set('age','young');
map.set('size1',6);
map.set(2,8);
for(let key of map.keys()){
  console.log(key);
  }
for(let key of map.keys()){
  console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}
