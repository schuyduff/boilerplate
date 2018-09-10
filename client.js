var $ = require("jquery");

var bootstrap = require("./less/bootstrap/dist/js/bootstrap.js");
var io = require('socket.io-client');
var viewport = require('responsive-toolkit');

$(document)
  .ready(function() {
    //=======================================================initialize html


    form.date();
    //=============================================================================on resize

    $(window)
      .resize(function() {
        $(window)
          .trigger("window:resize");
      });


    if (viewport.is('xs')) {
      console.log('xs');

    }

    if (viewport.is('sm')) {
      console.log('sm');


    }

    if (viewport.is('md')) {
      console.log('md');

    }

    if (viewport.is('lg')) {
      console.log('lg');

    }

    //=========================================================================splash


    $('.splash-enter')
      .on('click', function() {
        $(document)
          .scrollTop(0);
        $('.splash')
          .fadeOut();

      });

    $('.nav-abstract')
      .on('click', function() {
        $('.splash-one')
          .fadeIn();
      });

    $('.splash-enter')
      .on('click', function() {
        $(document)
          .scrollTop(0);
        $('.splash')
          .fadeOut();

      });

    $('.nav-contact')
      .on('click', function() {
        $('.splash-two')
          .fadeIn();

      });

    //====================================================================while loading

    var targets = ['.first'];

    function whileLoad() {

      draw.targets(targets)
        .map(function(target) {

          return draw.animation(target);

        })
        .then((elem) => {
          console.log("Loading Animation Done!");
          //	    		console.log(elem);
        })
        .catch((e) => {
          console.log("--------------------------------Error!");
          console.log(e);

        });


    }
    whileLoad(targets);

  });