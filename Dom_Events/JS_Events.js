const p1 = document.querySelector('section#a p');
const p2Baru = Document.createElement('p');
const teksBaru = document.createTextNode('aku sayang kamu');

p2Baru.appendChild(teksBaru);
p1.appendChild(p2Baru);

p1.addEventListener('mouseenter', function(){
    p1.style.backgroundColor = 'red';
});

p1.addEventListener('mouseleave', function(){
    p1.style.backgroundColor = 'yellow';
});