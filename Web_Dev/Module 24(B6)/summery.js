// console.log("External file");
const main=document.getElementById('main-container');
main.style.paddingLeft="50px";
main.style.color="skyblue";
main.style.backgroundColor="gray";

const section=document.createElement('section');
section.innerHTML= `
<h1>My Dynamic section</h1>
<p>Extra text added inside paragraph</p>
<ul>
    <li>First item</li>
    <li>First item</li>
    <li>First item</li>
    <li>First item</li>
</ul>`

const sectionElement=document.getElementById('section-one');
const h2=document.createElement('h2');
h2.innerText="Heading 2";

sectionElement.appendChild(h2);
//main.appendChild(section);

const alltitle=document.getElementsByTagName('h1');

alltitle.style.backgroundColor="red";
console.log(alltitle);