'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnCloseModal);
console.log(btnsOpenModal);

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(element => {
  element.addEventListener('click', openModal); //chamda da constante que possui a função para abrir a modal
});

overlay.addEventListener('click', closeModal); //chamda da constante que possui a função para fechar a modal
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  //O javascript já entende que o evento será passado como argumento da função
  //Isso porque a função é criada, mas não chamamos, então basicamente o JavScript faz essa magia
  /* console.log(event);
  console.log('Key was pressed'); */
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
