const btnOpen = document.querySelector('.btn_open');
const btnClose = document.querySelector('.btn_close');
const menuList = document.querySelector('.wrapper_poster--6');

btnOpen.addEventListener('click', () => {
    menuList.classList.add('wrapper_poster--6-active');
});

btnClose.addEventListener('click', () => {
    menuList.classList.remove('wrapper_poster--6-active');
});


