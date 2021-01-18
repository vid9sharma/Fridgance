$(document).ready(function() {
    $("article").hover(
        function() {
            $(this).addClass("newCSS");
        },
        function() {
            $(this).removeClass("newCSS")
        }
    );
});