$('li').hide();



function myFunction(){
    $('li').hide().fadeIn(500);

    console.log($('#free').html());
    $('li.hot').css("color", "red");
    $('li.cold').css("color", "blue");

}