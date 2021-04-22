$.fn.parallax = function(resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

$(document).mousemove(function(e) {
    $(".backgroundparallax").parallax(-30, e);
    $(".cloud1").parallax(10, e);
    $(".cloud2").parallax(20, e);
    $(".cloud3").parallax(30, e);
});


$(document).mousemove(function(e) {
    $('.backgroundparallax').parallax(-30, e);
    $('.cloud1').parallax(10, e);
    $('.cloud2').parallax(20, e);
    $('.cloud3').parallax(30, e);
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();