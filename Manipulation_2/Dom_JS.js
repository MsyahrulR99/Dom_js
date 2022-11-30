const pbaru = document.createElement('a');
const textbaru = document.createTextNode('aku sayang kamu');

pbaru.appendChild(textbaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pbaru);

const libaru = document.createElement('b');
const textnew = document.createTextNode('andai saja');

libaru.appendChild(textnew);

const sectionb = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
sectionb.appendChild(libaru);