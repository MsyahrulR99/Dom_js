//mengubah warna

const ubahwarna = document.getElementById('tombol');
ubahwarna.onclick = function(){
    //document.body.style.backgroundColor = 'red';
    document.body.classList.toggle('pink');
};


// acak warna

const tbaru = document.createElement('button');
const teksbaru = document.createTextNode('tombol baru');
tbaru.appendChild(teksbaru);
tbaru.setAttribute('type', 'button');

ubahwarna.after(tbaru);

tbaru.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});



//mengubah warna dalam input

const smerah = document.querySelector('input[name=smerah]');
const sbiru = document.querySelector('input[name=sbiru]');
const shijau = document.querySelector('input[name=shijau]');


smerah.addEventListener('input', function(){
    const r = smerah.value;
    const g = sbiru.value;
    const b = shijau.value;
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


sbiru.addEventListener('input', function(){
    const r = smerah.value;
    const g = sbiru.value;
    const b = shijau.value;
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    
});


shijau.addEventListener('input', function(){
    const r = smerah.value;
    const g = sbiru.value;
    const b = shijau.value;
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});




//mengubah tampilan body collor full


document.body.addEventListener('mousemove', function(event){
    const xpos = Math.round((event.clientX / window.innerWidth) * 255);
    const ypos = Math.round((event.clientY / window.Height) * 255);
    document.body.style.backgroundColor = 'rgb('+ xpos +', '+ ypos +', 100)';
});