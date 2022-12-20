document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.first-swiper', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.second-swiper', {
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        mousewheel: true,
        breakpoints: {
            0: {
                grid: {
                    rows: 1,
                },
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 30,
                mousewheel: false,
            },
            768: {
                grid: {
                    rows: 1,
                },
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 30,
                mousewheel: false,
            },
            1200: {
                grid: {
                    rows: 2,
                },
           
                direction: "vertical",
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });
    
    window.addEventListener('resize',function(){
        const swiper2 = document.querySelector('.second-swiper')
        let winW = window.innerWidth;
        if(winW < 1200){
            swiper2.removeEventListener('wheel',o())
        }else{
            swiper2.addEventListener('wheel',o())
        }
    })
    

    
});
$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() < 1200) {
            $('.section2 .swiper-wrapper').attr('style', 'height:auto;')
            $('.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet').css('display','inline-block');
            $('.swiper-pagination-vertical.swiper-pagination-bullets').css('top','initial')
            $('.second-swiper').off('mousewheel')
        }
  
           
        
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.sub_swiper', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });
});




