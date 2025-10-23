const solid = document.getElementsByClassName('solid');

for (let i = 0; i < solid.length; i++) {

    solid[i].addEventListener('click', function () {

        parar(solid);
        parar(gota);

        solid[i].style.animation = "vibrar 0.4s infinite";
        solid[i].style.border = "2px solid #333";
    });

}

function parar(valor) {
    for (let j = 0; j < valor.length; j++) {
        valor[j].style.animation = "none";
        valor[j].style.border = "none";
        // valor[j].style.transform = "scale(1)";
    }
}

const liquid = document.getElementsByClassName('liquid');
const gota = document.getElementsByClassName('gota');

for (let i = 0; i < liquid.length; i++) {
    liquid[i].addEventListener('click', function () {

        parar(gota);
        parar(solid);
    
            for(let j=0; j<gota.length;j++){
            gota[j].style.display = "block";
            gota[j].style.animationName = "lluvia";
            gota[j].style.animationDuration = "3s";
            gota[j].style.animationTimingFunction = "ease-in-out";
            gota[j].style.animationIterationCount = "infinite";
            
            }


    });
}


