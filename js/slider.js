sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
    $("#slider > Img#1").fadeIn(0);
    startSlider();
});

function startSlider(){
    count = $("#slider > Img").length;

    loop = setInterval(function(){

        if(sliderNext > count){
            sliderNext = 1;
            sliderInt = 1;
        }

        $("#slider > Img").fadeOut(0);
        $("#slider > Img#" + sliderNext).fadeIn(800);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;

    }, 7000)

}