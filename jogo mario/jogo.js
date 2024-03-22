const mario = document.querySelector('.mario');
const pipe= document.querySelector('.pipe')
const cloud=document.querySelector(.cloud)

const gameOver=documente.querySelector('.game-over')
const restartButton=document.querySelector('.restart')

const jump = () => {
      mario.classList.add('jump');

      setTimeout( () => {

        mario.classList.remove('jump');

      }, 500);
} 

const loop=setInterval(()=>{

  const pipePosition=pipe.offsetLeft;
  const marioPosition=+window.getComputedStyle(mario).buttom.replace('px','');
  const cloudPosition=+window.getComputedStyle(cloud).left.replace('px','');

  if (pipePosition)
})




document.addEventListener('keydown', jump);