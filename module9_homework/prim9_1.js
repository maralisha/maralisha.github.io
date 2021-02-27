const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentList = xmlDOM.querySelectorAll("student");

result = Object();

result.list = [];

studentList.forEach(student => {
    let nameNode = student.querySelector("name");
    let lang = nameNode.getAttribute("lang");
    let firstName = nameNode.querySelector("first").textContent;
    let lastName = nameNode.querySelector("second").textContent;
    let age = parseInt(student.querySelector("age").textContent);
    let prof = student.querySelector("prof").textContent;
    result.list.push({ name: firstName + lastName, age: age, prof: prof, lang: lang });
}
);

console.log(result);