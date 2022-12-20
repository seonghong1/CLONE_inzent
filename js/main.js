/* jquery*/

$(document).ready(function () {
    //hover시 submenu등장
    $('.header_inner .main_menu > li').hover(function () {
        $(this).children('.sub').toggle()
    });
    //hambtn클릭시 햄메뉴 등장
    $('.header_inner .ham_btn').click(function () {
        $('.ham_menu').slideToggle()
    })
    // hambtn클릭시 topbtn사라짐
    $('.header_inner .ham_btn').click(function () {
        $('.scroll_top').toggleClass('off')
    })
    //hambtn클릭시 백그라운드 및 span 모양 변경
    $('.header_inner .ham_btn').click(function () {
        $(this).toggleClass('active')
    })
    //section2 slide hover시 p태그 등장, 백그라운드 scale
    $('.section2 .sec2_box').hover(function () {
        $(this).toggleClass('active');
    })
    //section6 input클릭시 돋보기 사라짐
    $('.section6_wrap .search input').focus(function () {
        $('.section6_wrap .search .search_box i').hide()
    })
    $('.section6_wrap .search input').blur(function () {
        $('.section6_wrap .search .search_box i').show()
    })
    //모바일 h2클릭시 li등장
    $('.ham_menu_wrap .menu_list > h2').click(function () {
        $(this).parent().siblings().children('.ham_menu .ham_menu_wrap .menu_list > ul').slideUp()
        $(this).siblings('ul').slideToggle()
    })
    $(window).resize(function () {
        if ($(window).width() > 1200) {
            $('.ham_menu .ham_menu_wrap .menu_list > ul').removeAttr('style')
        }
    })
    /*유튜브 영상 닫기, 등장*/
    $(".section5_wrap .img_tv").click(function(){
        $(".sec5_ytb").show()
    })
    $(".ytb_wrap button").click(function(){
        $(".sec5_ytb").hide()
    }) 
    /*sub_sec3*/
    let winW = $(window).width()
    
    if (winW > 768) {
        $('.subpg_section3 .con_box').hover(function () {
            $(this).siblings().removeClass('active')
            $(this).siblings().css('width', '29.5%')
            $(this).addClass('active');
            
        })
    } else {
        $('.subpg_section3 .con_box').click(function () {
            if ($(this).hasClass('M_active')) {
                $(this).removeClass('M_active')
                $('.subpg_section3 .con_box').removeAttr('style')
                $(this).children('h4').show()
                $(this).siblings().children('h4').show(450)
            } else {
                $(this).addClass('M_active');
                $(this).siblings().removeClass('M_active')
                $(this).siblings().css('width', '9.5%')
                $(this).children('h4').show()
                $(this).siblings().children('h4').hide(450)
                
            }
        })
    }

    /*ask box*/
    $('.section6_wrap .right_menu a').click(function(){
        $('.ask').addClass('active')
        return false;
    })
    $('.ask > button').click(function(){
        $('.ask').removeClass('active');
    })

    /*sub 구축사례 등장*/ 
    $('.add_wrap button').click(function(){
        $('.add_wrap, .add_inner').css('display','none')
    })
    $('.kbBank_btn').click(function(){
        $('.add_wrap').css('display','flex');
        $('.kbBank').css('display','block');
    })
    $('.jbBank_btn').click(function(){
        $('.add_wrap').css('display','flex');
        $('.jbBank').css('display','block');
    })
    $('.kakaoBank_btn').click(function(){
        $('.add_wrap').css('display','flex');
        $('.kakaoBank').css('display','block');
    })

    $('.on_list').hover(function(){
        $('.on_list').removeClass('active')
       $('.menu_list').removeClass('active')
        $(this).siblings('.menu_list').addClass('active')
        $(this).addClass('active')
    })

    $(window).resize(function () {
        $('.subpg_section3 .con_box').removeAttr('style');
        $('.subpg_section3 .con_box').removeClass('M_active');
        $('.subpg_section3 .con_box').removeClass('active');
        $('.subpg_section3 .con_box h4').removeAttr('style')
    })
});
/* javascript */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("upBtn").addEventListener('click', function () {
        var body = document.getElementsByTagName("body")[0];
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: body.offsetTop
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function menuHover() {
        const bar = document.querySelector('.mb_bar');
        const menu = document.querySelectorAll('.header_inner .main_menu > li')

        menu.forEach(function (aa) {
            aa.onmouseover = function () {
                bar.style = `width:${this.offsetWidth}px;
                                left:${this.offsetLeft}px;`
            }
            aa.onmouseleave = function () {
                bar.style = `width: 0px;
                                left:${this.offsetLeft}px;`
            }
        })
    }
    menuHover()

        const Header = document.querySelector('header')
        let Sy = window.scrollY;
        let oSy = Sy;
        let ok = oSy < Sy;
    
        window.onscroll = function(){
            Header.classList.add('scrl')
            if(window.scrollY == 0){
                Header.classList.remove('scrl')
            }
        }
            
    
    
   

});


