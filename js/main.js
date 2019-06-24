window.onload = ()=> {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
        speed: 500,
        effect: 'fade',
    });
}
