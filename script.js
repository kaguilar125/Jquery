// $('li').hide();

// function myFunction(){
//     $('li').hide().fadeIn(500);

//     console.log($('#free').html());
//     $('li.hot').css("color", "red");
//     $('li.cold').css("color", "blue");

// }

document.addEventListener('DOMContentLoaded', ()=>{


    // Slider Begin
    const CaroS = document.querySelector('.Carousel-slider');
    const CaroSlider = new MicroSlider (CaroS, { indicators: true, IndicatorText:''});
    const hammer = new Hammer (CaroS);
    const CarosTimer = 2000;
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
   
    //---- Mouseenter Event
    CaroS.onmouseenter = function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + 'mouse detected');
    }

    //----- Mouseleave Event
    CaroS.onmouseleave = function(e) {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + 'mouse detected');
        }

    //------- Mouseclick event
    CaroS.onclick = function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + 'mouse detected');
    }

    //------- Gesture Tap Event
    hammer.on('tap', function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + 'gesture detected');
    });

    //----- Gesture Swipe Event
    hammer.on('Swipe', function(e){
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + 'gesture detected');
    });

    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink && slideLink !== null && slideLink.length > 0){
        slideLink.forEach(el => el.addEventListener('click', e => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== '#') window.open(href, target);
    }));
//---- Slider End


});