$(".que").click(function () {
    $(this).next(".ans").stop().slideToggle(300);
    if($(this).hasClass("on")){
        $(this).removeClass("on");
    }
    else {
        $(this).addClass("on");
    }
});
