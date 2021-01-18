(function($){
    $.fn.highlightMenu= function(options) {
        var defaults= $.extend({
            'bgColor' : '#1A276B',
            'color' : '#F2F2F2'
        }, options);

        return this.each(function() {
            // alert("hello");
            var items = $("li a");
            var o = defaults;
            items.css('font-family', 'cursive')
                 .css('font-weight', 'bold')
                 .css('text-decoration', 'none')
                 .css('background-color', o.bgColor)
                 .css('color', o.color);
            items.mouseover(function() {
                $(this).css('background-color', "#29C9F8")
                       .css('color', "#000000");
            });
            items.mouseout(function() {
                $(this).css('background-color', o.bgColor)
                       .css('color', o.color);
            });
        });
    }
})(jQuery);