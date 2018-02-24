//starts carousel animation 
// $('.carousel').carousel(); 
var captionLength = 0;
var caption = '';

//typing animation for caption 
$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    caption = $('#caption').html();
    type(); 
});

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 100);
    } else {
        captionLength = 0;
        caption = '';
    }
}
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}