$(document).ready(function(){
  $("body").hide().fadeIn(2500);

/*  $("p").hover(function(){
    $(this).toggleClass("ultra");
  }); */

  $('#wf').hover(function(){
    $("p").removeClass("active");
    $('#text1').addClass('active')
  });

  $('#wd').hover(function(){
    $("p").removeClass("active");
    $('#text2').addClass('active')
  });

  $('#cs').hover(function(){
    $("p").removeClass("active");
    $('#text3').addClass('active')
  });

  $('#pros').hover(function(){
    $("p").removeClass("active");
    $('#text4').addClass('active')
  });

  $('#it').hover(function(){
    $("p").removeClass("active");
    $('#text5').addClass('active')
  });


});
