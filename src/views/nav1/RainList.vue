<template>
    <div class="space">
    <div class="planet">
        <div class="planet_shadow"></div>
        <div class="crater1"></div>
        <div class="crater2"></div>
        <div class="crater3"></div>
        <div class="crater4"></div>
    </div>
    <div class="stars">
        <div class="star"></div>
        <div class="star pink"></div>
        <div class="star blue"></div>
        <div class="star yellow"></div>
        <div class="star red"></div>
        <div class="star pink"></div>
        <div class="star orange"></div>
        <div class="star green"></div>
        <div class="star purple"></div>
        <div class="star rubine"></div>
        <div class="star brown"></div>
        <div class="star white"></div>
    </div>
</div>
</template>

<style lang="scss">
    .space {
        width: 100%;
        height: 100vh;
        // background: #121212;
    }
 
    // .planet {
    //     width: 150px;
    //     height: 150px;
    //     border-radius: 50%;
    //     // background: #333;
    //     background: rgb(233, 181, 10);
    //     position: absolute;
    //     left: 60%;
    //     top: 30%;
    //     margin: -75px 0 0 -75px;
    //     overflow: hidden;
    //     z-index: 2;
    // }
 
    // .planet_shadow {
    //     position: absolute;
    //     border-radius: 50%;
    //     height: 100%;
    //     width: 100%;
    //     top: -40%;
    //     right: -10%;
    //     border: 35px solid rgba(0, 0, 0, .15);
    // }
 
    .crater1,
    .crater2,
    .crater3,
    .crater4 {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, .3);
        box-shadow: inset 3px 3px 0 rgba(0, 0, 0, .2);
    }
 
    // .crater1 {
    //     width: 20px;
    //     height: 20px;
    //     left: 25%;
    //     top: 20%;
    // }
 
    // .crater2 {
    //     width: 10px;
    //     height: 10px;
    //     left: 50%;
    //     top: 60%;
    // }
 
    // .crater3 {
    //     width: 15px;
    //     height: 15px;
    //     left: 30%;
    //     top: 65%;
    // }
 
    // .crater4 {
    //     width: 15px;
    //     height: 15px;
    //     left: 60%;
    //     top: 35%;
    // }
 
    .star {
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #FFF;
        top: 100px;
        left: 400px;
        position: relative;
        transform-origin: 100% 0;
        animation: star-ani 6s infinite ease-out;
        box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
        opacity: 0;
        z-index: 2;
    }
 
    .star:after {
        content: '';
        display: block;
        top: 0px;
        left: 4px;
        border: 0px solid #fff;
        border-width: 0px 90px 2px 90px;
        border-color: transparent transparent transparent rgba(255, 255, 255, .3);
        transform: rotate(-45deg) translate3d(1px, 3px, 0);
        box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
        transform-origin: 0% 100%;
        animation: shooting-ani 3s infinite ease-out;
    }
 
    .pink {
        top: 10px;
        left: 555px;
        background: #ff5a99;
        animation-delay: 15s;
        -webkit-animation-delay: 15s;
        -moz-animation-delay: 15s;
    }
 
    .pink:after {
        border-color: transparent transparent transparent #ff5a99;
        animation-delay: 15s;
        -webkit-animation-delay: 15s;
        -moz-animation-delay: 15s;
    }
 
    .blue {
        top: 25px;
        left: 832px;
        background: cyan;
        animation-delay: 7s;
        -webkit-animation-delay: 7s;
        -moz-animation-delay: 7s;
    }
 
    .blue:after {
        border-color: 'transpareanimation-delay: 12s';
        -webkit-animation-delay: 7s;
        -moz-animation-delay: 7s;
        animation-delay: 7s;
    }
 
    .yellow {
        top: 5px;
        left: 640px;
        background: #ffcd5c;
        animation-delay: 5.8s;
    }
 
    .yellow:after {
        border-color: transparent transparent transparent #ffcd5c;
        animation-delay: 10s;
    }

    .rubine {
        top: 18px;
        left: 740px;
        background: rgb(173, 6, 165);
        animation-delay: 12s;
    }
 
    .rubine:after {
        border-color: transparent transparent transparent #ffcd5c;
        animation-delay: 12s;
    }

    .orange {
        top: 8px;
        left: 1132px;
        background: orange;
        animation-delay: 8s;
        -webkit-animation-delay: 8s;
        -moz-animation-delay: 8s;
    }
 
    .orange:after {
        border-color: 'transpareanimation-delay: 12s';
        -webkit-animation-delay: 8s;
        -moz-animation-delay: 8s;
        animation-delay: 8s;
    }

    .green {
        top: 15px;
        left: 1352px;
        background:green;
        animation-delay: 18s;
        -webkit-animation-delay: 18s;
        -moz-animation-delay: 18s;
    }
 
    .green:after {
        border-color: 'transpareanimation-delay: 12s';
        -webkit-animation-delay: 18s;
        -moz-animation-delay: 18s;
        animation-delay: 18s;
    }

    .brown {
        top: 1px;
        left: 262px;
        background:rgb(141, 6, 6);
        animation-delay: 8s;
        -webkit-animation-delay: 8s;
        -moz-animation-delay: 8s;
    }
 
    .brown:after {
        border-color: 'transpareanimation-delay: 12s';
        -webkit-animation-delay: 8s;
        -moz-animation-delay: 8s;
        animation-delay: 8s;
    }

    .white {
        top: 15px;
        left: 932px;
        background:rgb(13, 23, 163);
        animation-delay: 8s;
        -webkit-animation-delay: 8s;
        -moz-animation-delay: 8s;
    }
 
    .white:after {
        border-color: 'transpareanimation-delay: 12s';
        -webkit-animation-delay: 8s;
        -moz-animation-delay: 8s;
        animation-delay: 8s;
    }
 
    .red {
        top: 5px;
        left: 432px;
        background:red;
        animation-delay: 6s;
        -webkit-animation-delay: 6s;
        -moz-animation-delay: 6s;
    }
 
    .red:after {
        border-color: 'transpareanimation-delay: 12s';
        -webkit-animation-delay: 6s;
        -moz-animation-delay: 6s;
        animation-delay: 6s;
    }

    @keyframes star-ani {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0) translate3d(0, 0, 0);
            -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
            -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
        }
 
        50% {
            opacity: 1;
            transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
            -webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
            -moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
        }
 
        100% {
            opacity: 0;
            transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
            -webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
            -moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
        }
    }
</style>
