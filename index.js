
const translates = {
    "en": {
        translation: {
            "mt-above": "By Wearing only AirPods",
            "main2": "Try maintaining the correct posture",
            "mainp": "When focused on work, your head might unknowingly stick out like a turtle. <br> With just AirPods, you can maintain good posture.",
            "dt1": "Realtime posture check",
            "dp1": "Using the sensor embedded in AirPods and our proprietary detection algorithm, we monitor your neck posture in real time.",
            "dt2": "Background notifications",
            "dp2": "Run the app once, leave it in the background, and focus on your work. If we detect your head unconsciously leaning forward, we'll notify you.",
            "dt3": "Posture history/statistics",
            "dp3": "We organize and provide useful information on how your posture was and when you adopted certain postures.",
            "dt4": "Customizable Settings",
            "dp4": "You can adjust how sensitively we detect forward head posture and how long you maintain poor posture before notifications are triggered, customizing it to suit your style.",
            "tos": "Terms of Service",
            "pp": "Privacy Policy",
            "ft": "Neck-Life: Posture correction with AirPods"
        }        
    },
    "ko": {
        translation: {
            "mt-above": "에어팟만 착용한채로",
            "main2": "바른 자세를 유지해보세요",
            "mainp": "일에 집중하다보면 나도 모르게 거북이처럼 나오는 고개 <br> 에어팟 하나만으로 바른 자세를 유지해보세요",
            "dt1": "실시간 자세 모니터링",
            "dp1": "에어팟에 탑재되어있는 센서를 이용해 자체 개발한 탐지 알고리즘을 이용하여 실시간으로 사용자의 목 자세를 모니터링해요",
            "dt2": "백그라운드 알림",
            "dp2": "앱을 한 번 실행하고 백그라운드에 두고, 일에 집중해보세요. 무의식적으로 앞으로 나오는 목 자세를 감지하면, 알림을 보내 알려드릴게요",
            "dt3": "자세 히스토리/통계 제공",
            "dp3": "나의 자세가 어땠는지, 언제 어떤 자세를 취했었는지 정리해서 유용한 정보를 제공해요",
            "dt4": "나만의 알림 설정",
            "dp4": "얼마나 민감하게 거북목을 탐지할지, 얼마나 나쁜 자세를 유지했을 때 알림을 울릴지, 나의 스타일에 맞게 설정할 수 있어요",
            "tos": "Terms of Service",
            "pp": "Privacy Policy",
            "ft": "Neck-Life: 에어팟과 함께하는 자세 교정"
        }
    }
  };

const keyList = [
    "mt-above",
    "main2",
    "mainp",
    "dt1",
    "dp1",
    "dt2",
    "dp2",
    "dt3",
    "dp3",
    "dt4",
    "dp4",
    "tos",
    "pp",
    "ft"
];


window.onload = () => {
    // console.log('asdf');
    let lang = navigator.language;
    lang = lang.substring(0, 2);

    for (let idx in keyList) {
        let key = keyList[idx];
        console.log(key);
        document.getElementById(key).innerHTML = translates[lang == 'ko' ? 'ko' : 'en']['translation'][key];
    }

    if (lang == 'en') {
        document.getElementById('home-img').src = 'home_en.png';
        document.getElementById('home-img2').src = 'home_en.png';
        document.getElementById('mockup2-img').src = 'mockup2_en.png';
        document.getElementById('history-img').src = 'history_en.png';
        document.getElementById('mockup5-img').src = 'mockup5_en.png';
    }

}

// let offsetSum = 0;
// let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
// let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// const neck = document.getElementById('neck');
// const neckHead = document.getElementById('neck-head');
// const bg = document.getElementsByClassName('neck-bg')[0];
// const noti = document.getElementById('noti-wrapper');

// let disableAnimation = false;
// let showedLogo = false;
// let outOfMain = false;

// const neckAnimation = (e) => {
//     if (disableAnimation) {
//         if (window.scrollY == 0) disableAnimation = false;
//         document.getElementsByTagName('body')[0].style.position = 'static';
//         return;
//     }

//     if (window.scrollY == 0) outOfMain = false;
//     if (!outOfMain) {
//         offsetSum += e.deltaY > 0 ? 10 : -10;
//         offsetSum = offsetSum > 500 ? 500 : offsetSum;
//     }
    
//     if (offsetSum < 0) {
//         offsetSum = 0;
//     } else if (offsetSum >= 500) {
//         document.getElementsByTagName('body')[0].style.position = 'static';
//         outOfMain = true;
//     } else if (offsetSum <= 300) {
//         let moving = 300-offsetSum;
//         if (vw > 900) {
//             neck.style.transform = `rotate(${moving/500*30}deg)`;
//             neckHead.style.top = `${-2- Math.cos(moving/500*30*Math.PI/180)*8}vh`;
//             neckHead.style.left = `${1.5 + Math.sin(moving/500*10*Math.PI/180)*8}vh`;
//         } else {
//             neck.style.transform = `rotate(${moving/500*30}deg)`;
//             neckHead.style.top = `${-19 - Math.cos(moving/500*30*Math.PI/180)*6}vh`;
//             neckHead.style.left = `${2.5 + Math.sin(moving/500*30*Math.PI/180)*6}vh`;
//         }
//     }

//     // if (window.scrollY == 0) {
//     //     offsetSum = 300;
//     // }

//     if (offsetSum >= 300) {
        
//         if (!showedLogo) {
//             if (vw > 900) {
//                 noti.style.animationName = 'fadein1';
//                 noti.style.animationDuration = '1s';
//                 noti.style.opacity = 0;
//             } else {
//                 noti.style.animationName = 'fadein2';
//                 noti.style.animationDuration = '1s';
//                 noti.style.opacity = 0;
//             }
//             showedLogo = true;
//         }
//     } else {
        
//     }

//     if (offsetSum < 300) {
//         document.getElementsByTagName('body')[0].style.position = 'fixed';
//         noti.style.opacity = 1;
//         noti.style.animationName = 'none';
//         showedLogo = false;
//     } 
// }

// let prevY = 0;
// let prevTime = 0;
// let lastY = 0;
// const neckAnimationMobile = (e) => {
//     if (isMoving) return;
//     let nowY = e.touches[0].pageY;
//     if (prevY == 0) {
//         prevY = nowY;
//         return;
//     }
//     let deltaY = prevY - nowY;
//     lastY = nowY;
//     if (disableAnimation) {
//         if (window.scrollY == 0) disableAnimation = false;
//         document.getElementsByTagName('body')[0].style.position = 'static';
//         return;
//     }

//     if (window.scrollY == 0) outOfMain = false;
//     if (!outOfMain) {
//         offsetSum += deltaY > 0 ? deltaY : -deltaY/10;
//         offsetSum = offsetSum > 500 ? 500 : offsetSum;
//     }
    
//     if (offsetSum < 0) {
//         offsetSum = 0;
//     } else if (offsetSum >= 500) {
//         document.getElementsByTagName('body')[0].style.position = 'static';
//         outOfMain = true;
//     } else if (offsetSum <= 300) {
//         let moving = 300 - offsetSum;
//         if (vw > 900) {
//             neck.style.transform = `rotate(${moving/500*30}deg)`;
//             neckHead.style.top = `${-24 - Math.cos(moving/500*30*Math.PI/180)*8}vh`;
//             neckHead.style.left = `${3.75 + Math.sin(moving/500*30*Math.PI/180)*8}vh`;
//         } else {
//             neck.style.transform = `rotate(${moving/500*30}deg)`;
//             neckHead.style.top = `${-19 - Math.cos(moving/500*30*Math.PI/180)*6}vh`;
//             neckHead.style.left = `${2.5 + Math.sin(moving/500*30*Math.PI/180)*6}vh`;
//         }
//     }

//     // if (window.scrollY == 0) {
//     //     offsetSum = 300;
//     // }

//     if (offsetSum >= 300) {
        
//         if (!showedLogo) {
//             if (vw > 900) {
//                 noti.style.animationName = 'fadein1';
//                 noti.style.animationDuration = '1s';
//                 noti.style.opacity = 0;
//             } else {
//                 noti.style.animationName = 'fadein2';
//                 noti.style.animationDuration = '1s';
//                 noti.style.opacity = 0;
//             }
//             showedLogo = true;
//         }
//     } else {
        
//     }

//     if (offsetSum < 300) {
//         document.getElementsByTagName('body')[0].style.position = 'fixed';
//         noti.style.opacity = 1;
//         noti.style.animationName = 'none';
//         showedLogo = false;
//     } 
// }

// let isMoving = false;
// let ivID = 0;
// const touchendEvent = (e) => {
//     if (isMoving) return;
//     // console.log(e.touches);
//     let nowY = lastY;

//     if (prevY == 0) {
//         prevY = nowY;
//         return;
//     }
//     // let deltaY = prevY - nowY;

//     if (disableAnimation) {
//         if (window.scrollY == 0) disableAnimation = false;
//         document.getElementsByTagName('body')[0].style.position = 'static';
//         return;
//     }

//     if (window.scrollY == 0) outOfMain = false;
//     if (!outOfMain) {
//         let dt = Date.now() - prevTime;
//         if (dt < 600) {
//             isMoving = true;
//             ivID = setInterval(() => {
//                 offsetSum += 5;
//                 let moving = 300 - offsetSum >= 0 ? 300 - offsetSum : 0;
//                 if (vw > 900) {
//                     neck.style.transform = `rotate(${moving/500*30}deg)`;
//                     neckHead.style.top = `${-24 - Math.cos(moving/500*30*Math.PI/180)*8}vh`;
//                     neckHead.style.left = `${3.75 + Math.sin(moving/500*30*Math.PI/180)*8}vh`;
//                 } else {
//                     neck.style.transform = `rotate(${moving/500*30}deg)`;
//                     neckHead.style.top = `${-19 - Math.cos(moving/500*30*Math.PI/180)*6}vh`;
//                     neckHead.style.left = `${2.5 + Math.sin(moving/500*30*Math.PI/180)*6}vh`;
//                 }
//                 if (offsetSum >= 500) {
//                     document.getElementsByTagName('body')[0].style.position = 'static';
//                     outOfMain = true;
//                     clearInterval(ivID);
//                 }
//                 if (offsetSum >= 300) {
                    
//                     if (!showedLogo) {
//                         if (vw > 900) {
//                             noti.style.animationName = 'fadein1';
//                             noti.style.animationDuration = '1s';
//                             noti.style.opacity = 0;
//                         } else {
//                             noti.style.animationName = 'fadein2';
//                             noti.style.animationDuration = '1s';
//                             noti.style.opacity = 0;
//                         }
//                         showedLogo = true;
//                     }
//                 } else {
                    
//                 }
//             }, 10);

//         }
//     }
    
//     if (offsetSum < 0) {
//         offsetSum = 0;
//     } else if (offsetSum >= 500) {
//         document.getElementsByTagName('body')[0].style.position = 'static';
//         outOfMain = true;
//     } else if (offsetSum <= 300) {
//         let moving = 300-offsetSum;
//         if (vw > 900) {
//             neck.style.transform = `rotate(${moving/500*30}deg)`;
//             neckHead.style.top = `${-24 - Math.cos(moving/500*30*Math.PI/180)*8}vh`;
//             neckHead.style.left = `${3.75 + Math.sin(moving/500*30*Math.PI/180)*8}vh`;
//         } else {
//             neck.style.transform = `rotate(${moving/500*30}deg)`;
//             neckHead.style.top = `${-19 - Math.cos(moving/500*30*Math.PI/180)*6}vh`;
//             neckHead.style.left = `${2.5 + Math.sin(moving/500*30*Math.PI/180)*6}vh`;
//         }
//     }

//     // if (window.scrollY == 0) {
//     //     offsetSum = 300;
//     // }

//     if (offsetSum >= 300) {
        
//         if (!showedLogo) {
//             if (vw > 900) {
//                 noti.style.animationName = 'fadein1';
//                 noti.style.animationDuration = '1s';
//                 noti.style.opacity = 1;
//             } else {
//                 noti.style.animationName = 'fadein2';
//                 noti.style.animationDuration = '1s';
//                 noti.style.opacity = 1;
//             }
//             showedLogo = true;
//         }
//     } else {
        
//     }

//     if (offsetSum < 300) {
//         document.getElementsByTagName('body')[0].style.position = 'fixed';
//         noti.style.opacity = 1;
//         noti.style.animationName = 'none';
//         showedLogo = false;
//     } 
// }

// document.body.addEventListener("wheel", neckAnimation);
// window.addEventListener('touchmove', neckAnimationMobile);
// window.addEventListener('touchstart', (e) => {
//     prevY = e.touches[0].pageY;
//     prevTime = Date.now();
// });
// window.addEventListener('touchend', touchendEvent);

// window.onload = () => {
//     if (window.scrollY != 0) {
//         disableAnimation = true;
//     }
//     // document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
//     document.getElementsByTagName('body')[0].style.position = 'fixed';
//     // disableScroll();
// }
