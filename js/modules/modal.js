function open(modalSelector, modalTimerId) {
    const wrapperModal = document.querySelector(modalSelector);
    wrapperModal.classList.add('show');
    wrapperModal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }    
}

function close(modalSelector) {
    const wrapperModal = document.querySelector(modalSelector);
    wrapperModal.classList.add('hide');
    wrapperModal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const openModal = document.querySelectorAll(triggerSelector),
        wrapperModal = document.querySelector(modalSelector);

    openModal.forEach(btn => {
        btn.addEventListener('click', () => open(modalSelector, modalTimerId));
    });   


    wrapperModal.addEventListener('click', (e) => {
        if (e.target === wrapperModal || e.target.getAttribute('data-close') == '') {
            close(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) =>{
        if (e.code === 'Escape' && wrapperModal.classList.contains('show')) {
            close(modalSelector);
        }
    });    

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            open(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {open};
export {close};