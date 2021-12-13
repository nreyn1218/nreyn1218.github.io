$(document).ready(function(){
    //preload images
    $("#image_list").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    //attach event handlers for links
    $("#image_list").click( evt => {
        //get the clicked <a> tag
        const link = evt.currentTarget;
    })

    $("#slider").bxSlider({
        preloadImages: 'all',
        auto: true,
        autoHover: true,
        slideWidth: 500,
        slideHeight: 500,
        slideMargin: 20,
        randomStart: false,
        captions: true,
        speed:3000,
        pagerType:'short',
    });


});

