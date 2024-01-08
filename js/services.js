$('a[data-slide-to]').on('click', function(){
    $('#carouselControl').carousel($(this).data('slide-to'));
});

$('button[data-slide-to]').on('click', function(){
    $('#carouselControl').carousel($(this).data('slide-to'));
});

$('a[data-slide-to]').on('click', function(){
    $('#carouselControl2').carousel($(this).data('slide-to'));
});

$('button[data-slide-to]').on('click', function(){
    $('#carouselControl2').carousel($(this).data('slide-to'));
});

$('a[data-slide-to]').on('click', function(){
    $('#carouselControl3').carousel($(this).data('slide-to'));
});

$('button[data-slide-to]').on('click', function(){
    $('#carouselControl3').carousel($(this).data('slide-to'));
});


$(document).ready(function() {

    $(".bf-slider").on("input change", function(event) {
        var element = $(this).parents(".before-after-container");
        var pos = event.target.value;

        element.find(".before").css({width: pos + "%"});
        element.find(".slider-button").css({left: "calc(" + pos + "% - 18px)"});
    });
});
