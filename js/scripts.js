'use strick';

const btn = document.querySelector('header a');
const h1 = document.querySelector ('header h1');

let countner = 0;

btn.addEventListener('click', () => {

    counter++;
    // alert('test');
    
    console.log(coutner);

    if(countner % 2 === 0) {

        h1.innerHTML = 'Wakacje nad morzem dla dzieci';
    } else {

        h1.innerHTML = 'Będzie Pan zadowolony';
    }



});