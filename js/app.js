$(document).ready(function(){

    var nav = $("#nav_icon")

    var return_to_top = $('#return_to_top')

    var about = $("#about");
    var about_menu = $("#about_menu");

    var service = $("#service");
    var service_menu = $("#service_menu");

    var work = $("#work");
    var work_menu = $("#work_menu");

    var blog = $("#blog");
    var blog_menu = $("#blog_menu");

    var contact = $("#contact");
    var contact_menu = $("#contact_menu")

//hamburger

    nav.click(function(){
		$(this).toggleClass('open');
	});

//button to the top

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 400) {
            return_to_top.fadeIn(200);
        } else {
            return_to_top.fadeOut(200);
        }
    });
    return_to_top.click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });

//menu

    about_menu.click(function() {
        $('html, body').animate({
            scrollTop: about.offset().top
        }, 700);
    })

    service_menu.click(function() {
        $('html, body').animate({
            scrollTop: service.offset().top
        }, 1000);
    })

    work_menu.click(function() {
        $('html, body').animate({
            scrollTop: work.offset().top
        }, 1000);
    })

    blog_menu.click(function() {
        $('html, body').animate({
            scrollTop: blog.offset().top
        }, 1200);
    })

    contact_menu.click(function() {
        $('html, body').animate({
            scrollTop: contact.offset().top
        }, 1200);
    })

// counter

        var a = 0;
        $(window).scroll(function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter_value').each(function() {
                    var $this = $(this),
                    countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                });
                a = 1;
            }
        });

});
