const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'red';
judul.innerHTML = 'aku sayang kamu';

const li = document.getElementsByTagName('li');
for(let i = 0 ; i < li.length; i++) {
    li[i].style.color = 'red';
}
li[1].innerHTML = 'kamu goblog';


const p3 = document.getElementsByClassName('p3');
p3[0].style.color = 'green';
p3[0].innerHTML = 'aku benci kamu';