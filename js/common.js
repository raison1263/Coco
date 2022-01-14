
// 스크롤바가 있는지 어떤지 확인 하는 함수
// 윈도우 resize 이벤트 발생시 스크롤 바 뮤무에 따른 상태 제어 프로그램
var deviceSize1 = 1024;
var deviceSize2 = 768;

function scrollOX(status) 
{
    $('html').css(
    {
        overflowY: status
    })

    var htmlWidth = $('html').width();
    return htmlWidth;
}

var scx = scrollOX('hidden');
var sco = scrollOX('scroll');

var scd = scx - sco;

if(scd > 0)
{
    deviceSize1 -= scd;
    deviceSize2 -= scd;
}

function init()
{
    var ww = $(window).width();

    if(ww > deviceSize1 && !$('html').hasClass('pc'))
    {
        $('html').addClass('pc').removeClass('tablet mobile');
        $('html').css({overflowY: 'auto',})
        $('#header #nav').css( 
            { 
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '0px',

                background: 'none',
                left: 'unset',
                overflow: 'unset',
            } );
        $('header #nav .depth1').css({
            position: 'unset',
            top: 'unset',
            height: 'unset',
            right: 'unset',
            width: 'unset',
            paadingTop: 'unset',
        })
        $('#header #nav .depth1 > li > a').next().hide();
        // $('#header .opennav').removeClass('on');
        $('html').scrollTop(0);
    }
    else if(ww > deviceSize2 && ww <= deviceSize1 && !$('html').hasClass('tablet'))
    {
        $('html').addClass('tablet').removeClass('pc mobile');
        $('html').css({overflowY: 'auto',})
        $('#header #nav').css( 
            { 
                position: 'fixed',
                top: '0px',
                transform: 'translateY(0%)',
                right: '0px',

                background: 'rgba(0, 0, 0, 0.5)',
                left: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
            } );
        $('header #nav .depth1').css({
                position: 'absolute',
                top: '0',
                height: '100%',
                right: '-200px',
                width: '200px',
                background: '#fff',
                paadingTop: '50px',
            })
        $('#header .opennav').removeClass('on');
        $('#header .opennav i').removeClass('fa-times').addClass('fa-bars')
        $('html').scrollTop(0);
    }
    else if( ww <= deviceSize2 && !$('html').hasClass('mobile') )
    {
        $('html').addClass('mobile').removeClass('tablet pc');
        $('html').css({overflowY: 'auto',})
        $('#header #nav').css( 
            { 
                position: 'fixed',
                top: '0px',
                transform: 'translateY(0%)',
                right: '0px',

                background: 'rgba(0, 0, 0, 0.5)',
                left: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
            } );
        $('header #nav .depth1').css({
                position: 'absolute',
                top: '0',
                height: '100%',
                right: '-200px',
                width: '200px',
                background: '#fff',
                paadingTop: '50px',
            })
        $('#header .opennav').removeClass('on');
        $('#header .opennav i').removeClass('fa-times').addClass('fa-bars')
        $('html').scrollTop(0);
    }
};

init();

$(window).on('resize', function()
{
    init();
})
// 여기까지

$('.search label').on('click', function()
{
    $('.search').toggleClass('on');
})

// click 이벤트는 a한테 적용
// mouseover 이벤트는 li한테 적용
$('#header #nav .depth1 > li').on('mouseover mouseout', function(e)
{
    e.preventDefault();

    if($('html').hasClass('pc'))
    {
        $(this).find('.depth2').stop().slideToggle(200);
    }
})

$('#header #nav .depth1 > li > a').on('click', function(e)
{
    e.preventDefault();
        
    if( !$('html').hasClass('pc') )
    {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth2').slideUp();
    }
})

$('#header .opennav').on('click', function()
{
    if( !$(this).hasClass('on') )
    {
        $('html').css({overflowY:'hidden'})
        $(this).addClass('on');
        $(this).next().animate({left:0}, 300)
        $(this).next().find('.depth1').animate({right:0}, 300)
        $(this).find('i').removeClass('fa-bars').addClass('fa-times');
    }
    else
    {
        $('html').css({
            overflowY:'auto',
        })
        $(this).removeClass('on');
        $(this).next().animate( { left: '100%' }, 300);
        $(this).next().find('.depth1').animate({right: '-200px'}, 300)
        $(this).next().find('.depth2').slideUp();
        $(this).find('i').removeClass('fa-times').addClass('fa-bars');
    }
});

$(window).on('scroll', function() 
{
    var sct = $(this).scrollTop();

    if( sct > 10)
    {
        $('#header').css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 9999999,
            background: "#fff"
        })
    }
    else 
    {
        $('#header').css({
            position: 'static',
            width: '100%'
        })
    }

    if( sct > 500 && !$('html').hasClass("gotopflag") )
    {
        $('html').addClass('gotopflag')
        $('body').append('<div class="gotop"><a href="javascript:;"><i class="fas fa-arrow-alt-circle-up"></i></a></div>')
        $('.gotop').css({
            position: 'fixed',
            right: '50px',
            bottom: '50px',
            fontSize: '50px',
            zIndex: 999,
            opaacity: 0,
        }).animate({opaacity:1}, 300)
    }
    else  if( sct <= 500 && $('html').hasClass("gotopflag") )
    {
        $('html').removeClass('gotopflag');
        $('.gotop').animate({opacity:0}, 300, function()
        {
            $(this).remove();
        })
        console.log("s");
    }
})

$('body').on('click', '.gotop',function()
{
    $('html').animate({
        scrollTop:0,
    }, 500)
})

$('#footer .privacy .fam').on('click', function()
{
    $(this).find('ul').slideToggle();
})