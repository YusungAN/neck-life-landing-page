let offsetSum = 0;
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const neck = document.getElementById('neck');
const neckHead = document.getElementById('neck-head');
const bg = document.getElementsByClassName('neck-bg')[0];
const noti = document.getElementById('noti-wrapper');

let disableAnimation = false;
let showedLogo = false;

document.body.addEventListener("mousewheel", (e) => {
    if (disableAnimation) {
        if (window.scrollY == 0) disableAnimation = false;
        document.getElementsByTagName('body')[0].style.overflowY = 'visible';
        return;
    }
    offsetSum += e.deltaY;
    console.log(offsetSum);
    if (offsetSum < 0) {
        offsetSum = 0;
    } else if (offsetSum >= 700) {
        document.getElementsByTagName('body')[0].style.overflowY = 'visible';
    } else if (offsetSum <= 500) {
        if (vw > 900) {
            neck.style.transform = `rotate(${offsetSum/500*30}deg)`;
            neckHead.style.top = `${-24 - Math.cos(offsetSum/500*30*Math.PI/180)*8}vh`;
            neckHead.style.left = `${3.75 + Math.sin(offsetSum/500*30*Math.PI/180)*8}vh`;
        } else {
            neck.style.transform = `rotate(${offsetSum/500*30}deg)`;
            neckHead.style.top = `${-19 - Math.cos(offsetSum/500*30*Math.PI/180)*6}vh`;
            neckHead.style.left = `${2.5 + Math.sin(offsetSum/500*30*Math.PI/180)*6}vh`;
        }
    }

    if (offsetSum >= 500) {
        bg.style.backgroundColor = '#FFC2B9';
        if (!showedLogo) {
            if (vw > 900) {
                noti.style.animationName = 'fadein1';
                noti.style.animationDuration = '1s';
                noti.style.opacity = 1;
            } else {
                noti.style.animationName = 'fadein2';
                noti.style.animationDuration = '1s';
                noti.style.opacity = 1;
            }
            showedLogo = true;
        }
    } else {
        bg.style.backgroundColor = '#BBFFB9';
    }

    if (offsetSum < 500) {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        noti.style.opacity = 0;
        noti.style.animationName = 'none';
        showedLogo = false;
    } 
});

window.onload = () => {
    if (window.scrollY != 0) {
        disableAnimation = true;
    }
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    // disableScroll();
}
