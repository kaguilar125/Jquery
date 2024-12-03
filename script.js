// $('li').hide();

// function myFunction(){
//     $('li').hide().fadeIn(500);

//     console.log($('#free').html());
//     $('li.hot').css("color", "red");
//     $('li.cold').css("color", "blue");

// }

document.addEventListener('DOMContentLoaded', ()=>{

CaroS.onclick = function(e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + ' mouse detected');
}

hammer.on('tap', function(e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + ' gesture detected');
});

})