$(function(){
    $(".menu-burger").click(function(){
        $(".contener-menu").show(function(){
          $(".menu-burger").hide();
          $("#btn_x").click(function(){
            $(".contener-menu").hide();
            $(".menu-burger").show();
          });
        });
    });
});

TweenMax.to(".container-loader", 1,{
    delay: 3,
    top: "-100vh",
    ease: Expo.easeInOut
});
TweenMax.to("#logo", 1,{
    delay: 3,
    opacity: "0",
    ease: Expo.easeInOut
});

const hero = document.querySelector(".hero");
const heroDeux = document.querySelector(".hero2")
const titre = document.querySelector("#titre");
const tl = new TimelineMax();

tl.delay(3.5);
tl.fromTo(hero,1.5, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
// .fromTo(heroDeux,1, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(titre, 1.7, {left: "-1800px"}, {left: "85px", ease: Power2.easeInOut});

var bgImage = new Array(); 

bgImage.push("../img/image_para_2.jpg"); 
bgImage.push("../img/virgil-abloh.jpg");

function changeBGImage(){
document.querySelector('.container-menu-img').style.backgroundImage = bgImage[0];
}

function changeStyleBack(){
document.querySelector('.container-menu-img').style.backgroundColor = bgImage[0];
}

