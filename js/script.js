$(function(){

    $('#test').hide();

    $(window).scroll(function(){
      if($(this).scrollTop() > 500 ) {
              $(`#test`).fadeIn();
            }  else {
              $(`#test`).fadeOut();
            }
    });

    $('#test').click(function(){
        $('body,html').animate({scrollTop: 0}, 500);
    });

});

