// top btn event
function goTop() {
    if (document.documentElement.scrollTop >= 50) {
        document.querySelector('.top_btn').classList.add('on')
    } else {
        document.querySelector('.top_btn').classList.remove('on')
    }
    document.querySelector('.top_btn').addEventListener('click', function () {
        window.scroll({
            top: 0,
        });
    })
}
window.onscroll = function () {
    goTop()
}

// main banner img change window matchMedia event
function mainBannerChange() {
    let mobileImg = window.matchMedia("screen and (max-width : 991px)");
    if (mobileImg.matches) {
        document.querySelector('.carousel-item:nth-child(1) img').setAttribute('src', './img/mobile_main_banner01.jpg')
        document.querySelector('.carousel-item:nth-child(2) img').setAttribute('src', './img/mobile_main_banner02.jpg')
    }
}
mainBannerChange()