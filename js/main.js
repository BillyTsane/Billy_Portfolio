// Update your main.js with this improved version
$(document).ready(function() {
    // navbar shrink
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    
    // Initialize parallax
    function parallaxMouse() {
        if($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        }
    }
    parallaxMouse();
    
    // skills bar animation
    $(window).scroll(function() {
        var hT = $("#skill-bar-wrapper").offset().top,
            hH = $("#skill-bar-wrapper").outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
            
        if(wS > (hT+hH-1.4*wH)) {
            $('.skillbar-container').each(function() {
                $(this).find('.skills').animate({
                    width: $(this).attr('data-percent')
                }, 1500); // Faster animation (1.5 seconds)
            });
        }
    });
    
    // portfolio filtering
    $('.filter-btn').click(function(e) {
        e.preventDefault();
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        let selector = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });
    });
    
    // Initialize Isotope
    $('.grid').isotope({
        itemSelector: '.col-lg-4',
        layoutMode: 'fitRows'
    });
    
    // image popup
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
    
    // smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });
    
    // navbar collapse on click
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });
});