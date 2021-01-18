$(document).ready(function() {
    var searchTerm;
    $("#btnSearch").click(function() {
        searchTerm = "";
        if($("#search").val() == "") {
            alert("You must enter one or more tags!");
        } else {
            searchTerm = $("#search").val();
            var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=refrigerator," + searchTerm + "&tagmode=all";
            
            $.getJSON(url, function(data) {
                var html = "";
                $.each(data.items, function(i, item) {
                    html += '<div class="grid-item"<h1>' + item.title + '</h1>';
                    html += '<img src=' + item.media.m + '></div>';
                });
                $("#photos").prev().removeClass("hidden");
                $("#photos").html(html).removeClass("hidden");
            });
        }
    });
});