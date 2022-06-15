 function klik(){
    Swal.fire({
        icon: 'error',
        title: 'Oops... Jangan Belajar.',
        text: 'Udah dibilang jangan belajar, Gass Mabar Kak!!!'
    }).then((result) => {
        if(result.isConfirmed){
                location.href = "https://play.google.com/store/apps/details?id=com.dts.freefireth"
        }
    });
}

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});