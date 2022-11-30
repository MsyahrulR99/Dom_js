//pilihan komputer

function getpilihancom () {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    else if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
    
}



//hasill


function gethasil (comp, player) {
    if( player == comp )  return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    
    }




//Membuat gambar bergerak gajah


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihancom = getpilihancom();
        const pilihanPlayer = pil.className;
        const hasil = gethasil(pilihancom, pilihanPlayer);

        putar();

        setTimeout(function (){

            

            const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', ' ' + pilihancom + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
        }, 1000 );

        
    });

});




//gambar agar putar dan acak


function putar (){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktumulai= new Date().getTime();
    setInterval(function (){
        if(new date().gatTime() - waktumulai > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', ' ' + gambar[i++] + '.png' );
        if(i == gambar.length) i = 0;
    }, 100)
}