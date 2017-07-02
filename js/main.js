     'use strict';  

$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 920) { 
          $(".navbar-default").css("background-color", "rgba(14, 214, 216, 0.7)");
        } else {
          $(".navbar-default").css("background-color", "transparent");
        }
      });
    });