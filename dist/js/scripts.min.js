var $blogSteps = $('.big-article-cont');
[...document.querySelectorAll('.steps-men')].forEach((btn, k) => {
    let tt = btn.getBoundingClientRect().top - document.querySelector('.article-steps__cont').getBoundingClientRect().top;
    // console.log(tt + '...' + k);
    // console.log('height ' + btn.offsetHeight);
});

if ($blogSteps.length > 0 && !mobile) {
    $blogSteps.find('.steps-men').css('left', $blogSteps.find('.big-article__text').offset().left);
    $('.steps-men a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('header').height() - 50
        }, 500);
        return false;
    });
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        var offset = $blogSteps.offset().top - $('header').height() - 300


        var fromTop = $(this).scrollTop(),
            menuItems = $('.steps-men a'),
            scrollItems = menuItems.map(function () {
                var item = $($(this).attr('href'));
                if (item.length) return item;
            }),
            cur = scrollItems.map(function () {
                if ($(this).offset().top - $('header').height() - 300 < fromTop) return this;
            });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : '';
        menuItems.removeClass('active').filter('[href="#' + id + '"]').addClass('active');
        console.log(menuItems.filter('[href="#' + id + '"]'));
        if (menuItems.filter('[href="#' + id + '"]')[0]) {
            let angl = 90;
            let ps = parseInt(id.replace(/[^0-9]/gi, ''), 10);
            // console.log(ps);
            // console.log(menuItems.filter('[href="#' + id + '"]')[0]);
            let hh = menuItems.filter('[href="#' + id + '"]')[0].getBoundingClientRect().top - document.querySelector('.article-steps__cont').getBoundingClientRect().top - (menuItems.filter('[href="#' + id + '"]')[0].offsetHeight / 4);
            document.querySelector('.article-steps__cont').style.setProperty('--vr', `${hh}px`);
            document.querySelector('.article-steps__cont').style.setProperty('--ang', `${angl * ps}deg`);
            document.querySelector('.article-steps__cont').style.setProperty('--op', `1`);
        } else {
            let angl = 90;
            document.querySelector('.article-steps__cont').style.setProperty('--ang', `90deg`);
            document.querySelector('.article-steps__cont').style.setProperty('--op', `0`);
        }

    });
}




$(document).ready(function() {
    var $slider = $('.results-slider');
    var $progressBar = $('.progress-res');

    var currT = 1;
    let lgt = [...document.querySelectorAll('.results-slider .slide')].length;



    $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        let calc2 = (100 / slick.slideCount) * (currentSlide + 1);

        $progressBar
            .css('background-size', calc2 + '% 100%')
            .attr('aria-valuenow', calc2 );


        // $progressBarLabel.text( calc + '% completed' );
    });
    $progressBar
        .css('background-size', (100 / lgt) * (currT) + '% 100%')
        .attr('aria-valuenow', (100 / lgt) * (currT) );

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        infinite: false,
        dots: false,
        fade: true,

    });
    var sldCr = $slider.slick;
    console.log(sldCr);

});

