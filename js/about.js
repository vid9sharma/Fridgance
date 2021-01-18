$(document).ready(function() {
    $("#reasons div").hide();

    $("#reasons li").click(function() {
        $(this).children().slideToggle(1500, "swing");
    });
});