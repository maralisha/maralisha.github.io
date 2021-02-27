
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`;

const jsonObj = JSON.parse(jsonString);

jsonObj.list.forEach(student => {
    student.age = parseInt(student.age);    
});

console.log(jsonObj);
