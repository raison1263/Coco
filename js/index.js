$('.article4 li > div').on('mouseover mouseout', function()
{
    $(this).toggleClass('on');
});

// $('.article4 li div .zoom > a:first-child').on('click', function()
// {
//     var href = $(this).attr('href');
//     var src = $(this).parent().prev().attr('src');

//     $('.outbox').css( { display : 'block' } );

//     $('.inbox a').attr( { href : href } );
//     $('.inbox img').attr( { src : src } );
  
//     return false;
// } );

$('.article4 li > div .zoom > a:first-child').on('click', function()
{
    var href = $(this).attr('href');
    var src = $(this).parent().prev().attr('src');

    // $('body').append('<div class="outbox"><div class="inbox"></div></div>')
    // $('.inbox').append('<a href="#" target="_blank"><img src="" alt="설명문구"></a>')
    // $('.inbox').append('<button type="button">닫기</button>')
    $('#wrap').after(`<div class="outbox"><div class="inbox"></div></div>`)
    $('.inbox').append(`<a href="${href}" target="_blank"><img src="${src}" alt="설명문구"></a>`)
    $('.inbox').append(`<button type="button">닫기</button>`)


    $('.outbox').css( { display : 'block' } );
    // $('.inbox a').attr( { href : href } );
    // $('.inbox img').attr( { src : src } );
  
    return false;
} );


// $('.outbox button').on('click', function()
// {
//     $(this).parents('.outbox').css( { display: 'none' } );
//     console.log("aa");
// } );
$('body').on('click', '.outbox button', function()
{
   $('.outbox').remove();
} );


$('.cs_board .tabmenu li').on('click', function()
{
    $(this).addClass('active').siblings().removeClass('active');

    var index = $(this).index();
    $(this).parent().next().children('div').eq(index).addClass('active').siblings().removeClass('active');
})

// 플러그인 슬라이드 
$('.slide-group').slick(
{
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    dots: true,

    prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',

    nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',

    fade: false,
    slideToShow: 1,
    slideToScroll: 1,

    responsive:[{
        breakpoint: 769,
        settings:{
            fade: true,
            arrows: false,
        }
    }]
})

// 슬릭슬라이더 자동재생멈춤 버튼 연결
$('.article1 .plpa').on('click', function()
{
    if($(this).find('i').hasClass('fa-pause'))
    {
        $('.slide-group').slick('slickPause')
        $(this).find('i').removeClass('fa-pause').addClass('fa-play')
    }
    else
    {
        $('.slide-group').slick('slickPlay')
        $(this).find('i').removeClass('fa-play').addClass('fa-pause')
    }
})

// //  슬라이드 구역
// function slideTaarget(count) 
// {
//     var pos = count * (-100) + '%'
//     $('.slide-group').animate( { left: pos  }, 500);
// }

// var count = 0;

// $('.article1 .next').on('click', function () 
// {
//     if (count < 2) 
//     {
//         count++;

//         $('.article1 .slickdots li').eq(count).addClass('active');
//         $('.article1 .slickdots li').eq(count).siblings().removeClass('active');
//         slideTaarget(count);
//     }
// })

// $('.article1 .prev').on('click', function () 
// {
//     if (count > 0) 
//     {
//         count--;
        
//         $('.article1 .slickdots li').eq(count).addClass('active');
//         $('.article1 .slickdots li').eq(count).siblings().removeClass('active');
//         slideTaarget(count);
//     }
// })

// $('.slickdots li button').on('click', function()
// {
//     $(this).parent().addClass('active');
//     $(this).parent().siblings().removeClass('active');
//     var liIndex = $(this).parent().index();
//     count = liIndex;
//     slideTaarget(liIndex);
// })

// product 구역의 p요소 글자수 제한하기
$('.article4 ul li').each(function()
{
    var text = $(this).find('p').text();
    var newtext = text.substr(0,40)

    
    if(text.length < 40)
    {
        var count = 40 - text.length;

        for(let i = 0; i < count; i++)
        {
            text += '&nbsp; ';
        }

        $(this).find('p').html(text)
    }
    else
    {
        $(this).find('p').text(newtext + '......'); 
    }
});


var article2Near = $('.article2').offset().top - $(window).height();

$(window).on('scroll', function()
{
    var sct = $(this).scrollTop();

    if(sct >= article2Near)
    {
        $('.article2').addClass('on');
    }
    else
    {
        $('.article2').removeClass('on');
    }
})

var article4Near = $('.article4').offset().top - $(window).height();

$(window).on('scroll', function()
{
    var sct = $(this).scrollTop();

    if(sct >= article4Near)
    {
        $('.article4').addClass('on');
    }
    else
    {
        $('.article4').removeClass('on');
    }
})

// 동여상 팝업박스
$('.cs_movie .tubewrap img').on('click', function()
{
    $('body').append('<div class="a"><div class="youtubeVideoOuter"><div class="youtubeVideoInner"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/h7C3RyiZfYs?controls=0&amp;mute=1&amp;autoplay=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div>');

    $("html").css({
        overflowY:'hidden'
    })

    $('.a').css({
        position:'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex:999999999,
    })

    $('.youtubeVideoOuter').css({
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',
        width: '100%',
        paddingTop: '56.25%',
        // background: 'rgba(0, 0, 0, 0.5)',
        // zIndex:999999999,
    })

    $('.youtubeVideoInner').css({
        position:'absolute',
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
    })

    $('.youtubeVideoInner').append('<button type="button">닫기</button>')

    $('.youtubeVideoInner button').css({
        position:'absolute',
        top: 0,
        right: 0,
    })
})

$('body').on('click', '.youtubeVideoOuter button',function()
{
    $('.a').remove();
    $("html").css({
        overflowY:'auto'
    })
})