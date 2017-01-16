window.onscroll = function () {
    if (pageYOffset >= 800) {
        document.getElementById('backToTop').style.visibility = "visible";
    } else {
 document.getElementById('backToTop').style.visibility = "hidden";
    }
};

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};