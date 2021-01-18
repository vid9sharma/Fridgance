$(document).ready(function() {
    //preload images
    $("#imageList a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    //set up event handlers for links
    $("#imageList a").hover(
        function(event) {
            $(this).stop(true).animate({top: 15}, "fast");

            //swap image
            $("#image").attr("src", $(this).attr("href"));

            //swap caption
            $("#caption").text($(this).attr("title"));

            //cancel the default action of the link
            event.preventDefault();
        },
        function(event) {
            $(this).stop(true).animate({ top: 0 }, "fast");
        }
    );
    $("imageList:first-child:first-child").focus();
});