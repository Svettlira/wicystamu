/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK a[href^="#"] ==========*/
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('.navbar-toggler').addClass('collapsed');
  $('#navbarResponsive').removeClass('show');

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});

/*========== MULTI-LEVEL / DOUBLE CLICK DROP DOWN MENU ==========*/
$(document).ready(function () {
    var DELAY = 700, clicks = 0, timer = null;

    // On click or double click
    $("nav ul li.dropdown a.dropdown-toggle")
        .on("click", function (e) {
            clicks++;
            if (clicks === 1) {
                timer = setTimeout(function () {
                    clicks = 0;
                }, DELAY);
            } else {
                clearTimeout(timer);
                window.location.href = $(this).attr('href');
                clicks = 0;
            }
        })
        .on("dblclick", function (e) {
            e.preventDefault();
        });

    //mulit-level menu
    $("ul.dropdown-menu [data-bs-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

    });
});

$(function () {
    var $tog=true;
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        var $subMenu = $(this).next('.dropdown-menu');
        if($tog){
            $subMenu.toggleClass('show');
            $tog = false;
            
        }
        else{
            $tog = true;
        }
        
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });
        return false;
    });
    $tog2 = true;
    document.getElementById("navbox").onclick = function() {myFunction()};
    function myFunction(){
        $tog2 = false
    }
    
    $('body').click(function(){
        document.getElementById('toggleId').classList.remove('show')
        $tog = true;
        if(($(window).width()<768)){ //adjust to mobile menu breakpoint
            if($tog2){
                document.getElementById('navbarResponsive').classList.remove('show')
            }
            
            $tog2 = true;
            
        }
    });
    
})


/*========== WAYPOINTS ANIMATION DELAY ==========*/
$(function () { // a self calling function
    function onScrollInit(items, trigger) { // a custom made function
       items.each(function () { //for every element in items run function
          var osElement = $(this), //set osElement to the current
             osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
             osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time
 
          osElement.css({ //change css of element
             '-webkit-animation-delay': osAnimationDelay, //for safari browsers
             '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
             'animation-delay': osAnimationDelay //normal
          });
 
          var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger
 
          osTrigger.waypoint(function () { //scroll upwards and downwards
             osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
          }, {
                triggerOnce: true, //only once this animation should happen
                offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
             });
       });
    }
 
    // onScrollInitCounterUp();
    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});
