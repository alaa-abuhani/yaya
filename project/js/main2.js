$(document).ready(function () {

    $('.wrapper-item-slide ').slick({
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // centerMode: true,
        // centerPadding: '20%',
        // rtl: true,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.8,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    settings: "unslick"
                }
            }

        ]

    });


});