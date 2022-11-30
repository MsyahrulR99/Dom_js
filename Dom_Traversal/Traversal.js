// Cara lama untuk close card



//const hapusicon = document.querySelector('.close');
//const card = document.querySelector('.card');
//hapusicon.addEventListener('click', function(){
  // card.style.display = 'none';
//});




// Cqra ke_1 untuk close card nya


//const close = document.querySelectorAll('.close');

//for (let i = 0; i < close.length; i ++) {
  //  close[i].addEventListener('click', function(e){
    //    e.target.paretElement.style.display = 'none';
    //});
//};



// Cara ke_2 terbaru mengguankan traversal


//const close = document.querySelectorAll('.close');

//close.forEach(function(el){
  //  el.addEventListener('click', function(e){
    //    e.target.parentElement.style.display = 'none';
    //});
//});


// Cara menelusuri Parent_Child

const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling);



