document.addEventListener('DOMContentLoaded', function() {
    // side nav
    var side = document.querySelectorAll('.sidenav');
    M.Sidenav.init(side);

    // sileder
    var slide =  document.querySelectorAll('.slider');
    M.Slider.init(slide,{
        // options
        indicators:false,
        height:600,
        interval:2500
    });

    var client = document.querySelectorAll('.parallax');
    M.Parallax.init(client);

    var materialboxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);

    var scrollspy =  document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy,{
        scrollOffset : 60
    });

});