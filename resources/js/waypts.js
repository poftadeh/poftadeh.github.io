  /* reveal projects on scroll to computer element */
  $('.computer').waypoint(function (direction) {
    $('.js-section-projects').removeClass('blue-background');
    
    $('.section-projects > h2').removeClass('hide');
    
    $('.project-box').each(function() {
      $(this).removeClass('hide');  
    });
  }, {
    offset: '0'
  });


  /* reveal projects on scroll to computer element */
  $('.project-box:last-child').waypoint(function (direction) {
    $('.section-tech i').each(function() {
      $(this).removeClass('hide');
      $(this).addClass('bounceIn');
    });
  }, {
    offset: '0'
  });