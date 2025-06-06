const disco = document.querySelector("#disco");
const posInicial = disco.offsetLeft;
const titulo = document.querySelector("#titulo");

window.addEventListener("scroll", (event)=>{
    let scrolly = window.scrollY

    disco.style.left = (posInicial + scrolly * 2) + "px";
    disco.style.transform = `rotate(${scrolly*2}deg)`;
    titulo.style.opacity = 1- (scrolly/290);

})

function expansion(discoid){
    const disco = document.getElementById(discoid);
    const discoimg = disco.querySelector(".imgdisco");
    const discoinfo = disco.querySelector(".info");
    disco.style.width = "20%";
    discoimg.style.width = "100%";
    discoimg.style.height = "70%";
    discoinfo.style.height = "30%";
    discoimg.style.alignitems = "center;"
}
function reduccion(discoid){
    const disco = document.getElementById(discoid);
    const discoimg = disco.querySelector(".imgdisco")
    const discoinfo = disco.querySelector(".info");
    discoimg.style.width = "100%";
    discoimg.style.height = "100%";
    discoinfo.style.height = "0%";
    disco.style.width = "10%";
}
function play(audioId, discoid){
    const disco = document.getElementById(discoid);
    const audio = document.getElementById(audioId);
    const button = document.querySelector(`button[onclick="play('${audioId}', '${discoid}')"]`);    const icono = button.querySelector('i');

    disco.addEventListener("mouseleave", () => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
            icono.classList.remove('fa-pause');
            icono.classList.add('fa-music');
        }
    });

    if(audio.paused){
        audio.play();
        icono.classList.remove('fa-music');
        icono.classList.add('fa-pause');
    } else {
        audio.pause();
        icono.classList.remove('fa-pause');
        icono.classList.add('fa-music');
        audio.currentTime = 0;
    }
}