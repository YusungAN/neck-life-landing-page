let offsetSum = 0;
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const neck = document.getElementById('neck');
const neckHead = document.getElementById('neck-head');
const bg = document.getElementsByClassName('neck-bg')[0];
const noti = document.getElementById('noti-wrapper');

let disableAnimation = false;
let showedLogo = false;
let outOfMain = false;

const neckAnimation = (e) => {
    if (disableAnimation) {
        if (window.scrollY == 0) disableAnimation = false;
        document.getElementsByTagName('body')[0].style.position = 'static';
        return;
    }

    if (window.scrollY == 0) outOfMain = false;
    if (!outOfMain) {
        offsetSum += e.deltaY > 0 ? 10 : -10;
        offsetSum = offsetSum > 500 ? 500 : offsetSum;
    }
    
    if (offsetSum < 0) {
        offsetSum = 0;
    } else if (offsetSum >= 500) {
        document.getElementsByTagName('body')[0].style.position = 'static';
        outOfMain = true;
    } else if (offsetSum <= 300) {
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

    // if (window.scrollY == 0) {
    //     offsetSum = 300;
    // }

    if (offsetSum >= 300) {
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

    if (offsetSum < 300) {
        // document.getElementsByTagName('body')[0].style.position = 'fixed';
        noti.style.opacity = 0;
        noti.style.animationName = 'none';
        showedLogo = false;
    } 
}

let prevY = 0;
let prevTime = 0;

const neckAnimationMobile = (e) => {
    let nowY = e.touches[0].pageY;
    if (prevY == 0) {
        prevY = nowY;
        return;
    }
    let deltaY = prevY - nowY;

    if (disableAnimation) {
        if (window.scrollY == 0) disableAnimation = false;
        document.getElementsByTagName('body')[0].style.position = 'static';
        return;
    }

    if (window.scrollY == 0) outOfMain = false;
    if (!outOfMain) {
        if (prevTime != 0) {
            let dt = Date.now() - prevTime;
            offsetSum += deltaY > 0 ? deltaY/dt : -deltaY/dt;
        } else {
            offsetSum += deltaY > 0 ? deltaY : -deltaY/10;
            offsetSum = offsetSum > 500 ? 500 : offsetSum;
        }
    }
    
    if (offsetSum < 0) {
        offsetSum = 0;
    } else if (offsetSum >= 500) {
        document.getElementsByTagName('body')[0].style.position = 'static';
        outOfMain = true;
    } else if (offsetSum <= 300) {
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

    // if (window.scrollY == 0) {
    //     offsetSum = 300;
    // }

    if (offsetSum >= 300) {
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

    if (offsetSum < 300) {
        // document.getElementsByTagName('body')[0].style.position = 'fixed';
        noti.style.opacity = 0;
        noti.style.animationName = 'none';
        showedLogo = false;
    } 
}

document.body.addEventListener("wheel", neckAnimation);
window.addEventListener('touchmove', neckAnimationMobile);
window.addEventListener('touchstart', (e) => {
    prevY = e.touches[0].pageY;
    prevTime = Date.now();
});
window.addEventListener('touchend', neckAnimationMobile);

window.onload = () => {
    if (window.scrollY != 0) {
        disableAnimation = true;
    }
    // document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.getElementsByTagName('body')[0].style.position = 'fixed';
    // disableScroll();
}
