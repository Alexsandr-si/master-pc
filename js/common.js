$(document).ready(function() {
    
$(".menu_ul>li").hover(function(){
    $s_width=$(this).innerWidth();
    $(".hidden_menu>li").innerWidth($s_width);
});
    
    $(".popup_img").magnificPopup({type:"image"});
    
    $(".icon_menu").click(function(){
        $("nav").removeClass("menu_nav");
        $("header>nav").toggleClass("active_menu");
        $(".remove_link>a").removeAttr("href");
    });
});

$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('fadeInUp');
        $(".master_work").css("opacity", "1");
      }
    });
  });
$(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('fadeInUp');
        $(".futures").css("opacity", "1");
      }
    });
  });