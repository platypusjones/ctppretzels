$( document ).ready(function() {


function MobileOverlay() {
    $('#mobile-overlay').fadeToggle('fast');
    $('#nav-toggle').toggleClass('active');
}

$('#navicon').click(MobileOverlay);
$('#mobile-overlay a').click(MobileOverlay);

$('.click').click(function () {
	        $(this).toggleClass('flip');
	    });
});

$('li.hidden').hide();


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



$(document).ready(function(e) {
$('ul.original li.title').click(function() {
    if($(this).hasClass("clicked")) {
        $('ul.original li.hidden').hide();
        $('ul.original li .toggle').removeClass("toggled");
        $(this).removeClass("clicked");
    } else {
        $(this).addClass("clicked");
        $('ul.original li .toggle').addClass("toggled");
        $('ul.original li.hidden').hide().each(function( i ) {
        $(this).delay( i * 30 ).fadeIn('900');
});
    }
});
});


$(document).ready(function(e) {
$('ul.everything li.title').click(function() {
    if($(this).hasClass("clicked")) {
        $('ul.everything li.hidden').hide();
        $('ul.everything li .toggle').removeClass("toggled");
        $(this).removeClass("clicked");
    } else {
        $(this).addClass("clicked");
        $('ul.everything li .toggle').addClass("toggled");
        $('ul.everything li.hidden').hide().each(function( i ) {
        $(this).delay( i * 30 ).fadeIn('900');
});
    }
});
});

$(document).ready(function(e) {
$('ul.garlic li.title').click(function() {
    if($(this).hasClass("clicked")) {
        $('ul.garlic li.hidden').hide();
        $('ul.garlic li .toggle').removeClass("toggled");
        $(this).removeClass("clicked");
    } else {
        $(this).addClass("clicked");
        $('ul.garlic li .toggle').addClass("toggled");
        $('ul.garlic li.hidden').hide().each(function( i ) {
        $(this).delay( i * 30 ).fadeIn('900');
});
    }
});
});


//document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  //this.classList.toggle( "active" );
//});
