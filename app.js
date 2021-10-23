const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', () =>{
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play();
    }
});

//preloader

const preloader = document.querySelector('.preloader');

// The load event is fired when the whole page has loaded.
// Including all dependent resources such as stylesheets and images.
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});