let mario = document.querySelector('.mario');
let pipe= document.querySelector('.pipe')


document.addEventListener('keydown', up)

function up(){
    mario.classList.add('ativo');
    setTimeout(function remover(){
        mario.classList.remove('ativo')
    }, 1250)
}
const loop = setInterval(function () {
    const pipePosition= pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px', '');
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 90){
        mario.src='./img/game-over.png'
        mario.style.width='75px'
        mario.style.marginLeft='75px'
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.bottom=`${marioPosition}px`
    }
    else {

    }
},10);