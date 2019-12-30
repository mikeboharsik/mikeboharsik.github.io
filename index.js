let buttons, activeButton;

const keyCodes = {
  ENTER: 13,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
};

$(document).ready(function() {
  $('#slider').css({left: $('.link-img-32').first().position().left});
  
  if (document.cookie.indexOf('fadein=false') === -1)
  {  
    $('body').css('opacity', 0);
    $('#link-github').css({opacity: 0, top: '-16px'});
    $('#link-twitter').css({opacity: 0, top: '-16px'});
    $('#link-youtube').css({opacity: 0, top: '-16px'});
    $('#slider').css({opacity: 0});
    $('.link-img-32').css({'pointer-events': 'none'});
    $('#projects').css({opacity: 0});
    
    $('body').animate({opacity: 1}, 500, function() {
      $('#link-github').animate({opacity: 1, top: '0px'}, 300, function() {
        $('#slider').animate({opacity: 1}, 150, function() {
          $('#projects').animate({opacity: 1},150);
        });
        $('.link-img-32').css({'pointer-events': 'auto'});
      });
    });
    document.cookie = 'fadein=false';
  }
  
  $('#description-text, #mikespan').mouseenter(function() {
    $('#mikespan').stop().animate({color: '#FFF'}, 250);
  });
  $('#description-text, #mikespan').mouseleave(function() { 
    $('#mikespan').stop().animate({color: '#CCC'}, 250);
  });
  
  $('.link-img-32').mouseenter(function() {
    $(this).stop().animate({opacity: 0.7 }, 150);
    $('#slider').stop().animate({left: $(this).position().left}, 250, 'easeOutQuad');
  });
  $('.link-img-32').mouseleave(function() {
    $(this).stop().animate({opacity: 1.0}, 150);
  });  
  
  $('#mikespan').click(function() {
    window.open('https://github.com/mikeboharsik', '_blank');
  });
  
  buttons = $('.link-img-32');
  activeButton = 0;
  
  $(window).keydown(function(e) {
    if (e.keyCode === keyCodes.ENTER) {
      buttons[activeButton].children[0].click();
    }
    else if (e.keyCode === keyCodes.LEFT_ARROW){
      if (activeButton > 0) {
        activeButton--;
        $('#slider').stop().animate({left: $(buttons[activeButton]).position().left}, 250, 'easeOutQuad');
      }
    }
    else if (e.keyCode === keyCodes.RIGHT_ARROW) {
      if (activeButton < buttons.length - 1) {
        activeButton++;
        $('#slider').stop().animate({left: $(buttons[activeButton]).position().left}, 250, 'easeOutQuad');
      }
    }
  });
});