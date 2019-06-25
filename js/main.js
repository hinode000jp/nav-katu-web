window.onload = ()=> {
    new Swiper('.swiper-container', {
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
        speed: 500,
        effect: 'fade',
    });

    smoothLink();
}

const smoothLink = () => {
    const interval = 10;
    const divisor = 8;
    const range = (divisor / 2) + 1;
    const links = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {

            e.preventDefault();
            let toY;
            let nowY = window.pageYOffset;
            const href = e.target.getAttribute('href');
            const target = document.querySelector(href);
            const targetRect = target.getBoundingClientRect();
            const targetY = targetRect.top + nowY;

            // スクロール終了まで繰り返される処理
            (doScroll = () => {
                toY = nowY + Math.round((targetY - nowY) / divisor);
                window.scrollTo(0, toY);
                nowY = toY;

                if (document.body.clientHeight - window.innerHeight < toY) {
                    //最下部にスクロールしても対象まで届かない場合は下限までスクロールして強制終了。
                    window.scrollTo(0, document.body.clientHeight);
                    return;
                }
                if (toY >= targetY + range || toY <= targetY - range) {
                    //rangeの範囲内へ近くまで繰り返す。
                    window.setTimeout(doScroll, interval);
                } else {
                    //rangeの範囲内に来れば正確な値へ移動して終了。
                    window.scrollTo(0, targetY);
                }
            })();
        });
    }
}
