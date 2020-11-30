$(document).ready(function(){
    $('.heading-h2').addClass('type-paragraph');
    $('.logo').addClass('show-logo');
    $('.arrow-svg').addClass('show-arrow');
});


$(window).scroll(function () {



    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("nav").removeClass("not-scrolled-nav");
        $("nav").addClass("scrolled-nav");
    } else {
        $("nav").removeClass("scrolled-nav");
        $("nav").addClass("not-scrolled-nav");
    }

    $(".header-image").css("top", "0" + (scroll / 1.8) + "px");

});

window.onscroll = function () { stickyNav() };

    function stickyNav() {
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }


var string = "Hey! I'm Kyle, an aspiring developer.";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("type-heading").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
    loopTimer = setTimeout('frameLooper()',70);
}
frameLooper();

