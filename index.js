$("portimg li").animate({
    opacity: 0
}, 100, function() {
    // Callback
    $(this).css("background-image", "url(" + images/iconplus.png + ")").promise().done(function(){
        // Callback of the callback :)
        $(this).animate({
            opacity: 1
        }, 600)
    });    
});