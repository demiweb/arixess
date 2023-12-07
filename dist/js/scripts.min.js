$(document).ready(function() {
    var $slider2 = $('.ari-comm-slider');
    var $progressBar1 = $('.ari-comments .progress-res');

    var currT1 = 1;
    let lgt1 = [...document.querySelectorAll('.ari-comm-slider .slide')].length;



    $slider2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        let calc2 = (100 / slick.slideCount) * (currentSlide + 1);

        $progressBar1
            .css('background-size', calc2 + '% 100%')
            .attr('aria-valuenow', calc2 );


        // $progressBarLabel.text( calc + '% completed' );
    });
    $progressBar1
        .css('background-size', (100 / lgt1) * (currT1) + '% 100%')
        .attr('aria-valuenow', (100 / lgt1) * (currT1) );

    $slider2.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        dots: true,
        fade: false,
        arrows: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]

    });
    var sldCr1 = $slider2.slick;
    // console.log(sldCr1);

//    slider techs

    var $sliderTech = $('.techs-slides');



    function controlTechSlider() {
        if (window.innerWidth < 600) {
            $sliderTech.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 400,
                infinite: true,
                dots: false,
                fade: false,
                arrows: true,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]

            });
            var sldCr2 = $sliderTech.slick;
        }
    }
    controlTechSlider()

//    slider techs

});

let tabBtn = [...document.querySelectorAll(".build-head .single-btn")];
function changeTab() {
    tabBtn.length && tabBtn.forEach((e,o)=>{
            e.addEventListener("click", ()=>{
                    e.classList.contains("active") || (tabBtn.forEach(e=>{
                            e.classList.remove("active")
                        }
                    ),
                        e.classList.add("active"),
                        [...document.querySelectorAll(".build-tabs__wrap .single-build-tab")].forEach((e,t)=>{
                               if( t === o) {
                                   e.classList.add("active");

                               } else {
                                   e.classList.remove("active")
                               }
                            }
                        ))
                }
            )
        }
    )
}
changeTab();

let singleBuild = [...document.querySelectorAll('.single-build .build-tabs__head')];

function controlSingleBuild() {
    if (singleBuild.length) {
        singleBuild.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                singleBuild.forEach((btn2) => {
                    btn2.classList.remove('active');
                    btn2.querySelector('.single-btn').classList.remove('active');
                });
                btn.classList.add('active');
                btn.querySelector('.single-btn').classList.add('active');
                setTimeout(() => {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(btn).offset().top - 7
                    }, 500);
                }, 600)
            })
        })
    }
}

controlSingleBuild();

//modal window

//btn-go

let btnGo = [...document.querySelectorAll('.btn-go')];

function goBtnScroll() {
    if (btnGo.length) {
        btnGo.forEach((btn) => {
            let dat = btn.dataset.go;

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                $([document.documentElement, document.body]).animate({
                    scrollTop: $(`.${dat}`).offset().top
                }, 600);

            });


        })
    }
}

goBtnScroll();

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-win')];


function controlModal() {
    if (btnMod.length) {
        console.log('asdsdasdasd');

        $('body').on('click', '.btn-mod', function (e) {
            e.preventDefault();
            e.stopPropagation();
            let data = this.dataset.mod;
            console.log('asdqwdqwdqwd');
            console.log(data);
            modals.forEach((mod) => {
                if (mod.dataset.modal === data) {
                    document.body.classList.add('no-scroll');

                    mod.classList.add('visible');

                }
            })
        });


        $('body').on('click', '.close', function (e) {

                this.closest('.modal-win').classList.remove('visible');
                document.body.classList.remove('no-scroll');
        });


        $('body').on('click', '.backplate', function (e) {
            this.closest('.modal-win').classList.remove('visible');
            document.body.classList.remove('no-scroll');

        });



    }
}

$(window).scroll(function (e) {
    $el = $('.call-landing');
    $el.toggleClass('fixs', $(this).scrollTop() > 60);

});
$(document).ready(function () {
    $el = $('.call-landing');
    $el.toggleClass('fixs', $(this).scrollTop() > 60);
});

// controlModal();






