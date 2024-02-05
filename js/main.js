const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// reinicia el video cuando termina
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video-food');

    video.addEventListener('ended', function () {
        video.currentTime = 0; 
        video.play(); 
    });
});