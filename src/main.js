$(document).ready(function () {
    $('#navigation_btn').click(function() {
        $('#navigation_items').toggle();
        $('#mobile_navigation').toggleClass('fullscreen');
    });
});