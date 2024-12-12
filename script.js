// $('li').hide();

// function myFunction(){
//     $('li').hide().fadeIn(500);

//     console.log($('#free').html());
//     $('li.hot').css("color", "red");
//     $('li.cold').css("color", "blue");

// }

ocument.addEventListener('DOMContentLoaded', () => {
    // Slider Begin
    const CaroS = document.querySelector('.Carousel-slider');
    const CaroSlider = new MicroSlider(CaroS, { indicators: true, IndicatorText: '' });
    const hammer = new Hammer(CaroS);
    const CaroSTimer = 2000;
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

    // Mouseenter Event
    CaroS.onmouseenter = () => {
        clearInterval(CaroAutoplay);
        console.log('Mouseenter detected');
    };

    // Mouseleave Event
    CaroS.onmouseleave = () => {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log('Mouseleave detected');
    };

    // Mouseclick event
    CaroS.onclick = () => {
        clearInterval(CaroAutoplay);
        console.log('Mouse click detected');
    };

    // Gesture Tap Event
    hammer.on('tap', () => {
        clearInterval(CaroAutoplay);
        console.log('Tap gesture detected');
    });

    // Gesture Swipe Event
    hammer.on('swipe', () => {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log('Swipe gesture detected');
    });

    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink) {
        slideLink.forEach(el => el.addEventListener('click', e => {
            e.preventDefault();
            let href = el.dataset.href;
            let target = el.dataset.target;
            if (href !== '#') window.open(href, target);
        }));
    }
    // Slider End
});