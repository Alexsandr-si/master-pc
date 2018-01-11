$(document).ready(function() {
$(".menu_ul>li").hover(function(){
    $s_width=$(this).innerWidth();
    $(".hidden_menu>li").innerWidth($s_width);
});

});