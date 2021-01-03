let buttons, activeButtonIdx, activeButton;

const ENTER = 13;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const linkImg32 = '.link-img-32';
const slider = '#slider';
const mikespan = '#mikespan';

const urlGithub = 'https://github.com/mikeboharsik';

$(document).ready(function() {
  
  if (document.cookie.indexOf('fadein=false') === -1)
  {  
    $('body').css('opacity', 0);    
    $('body').animate({opacity: 1}, 500, function() {});

    document.cookie = 'fadein=false';
  }
  
  $(`#description-text, ${mikespan}`).mouseenter(function() {
    $(mikespan).stop().animate({color: '#FFF'}, 250);
  });
  $(`#description-text, ${mikespan}`).mouseleave(function() { 
    $(mikespan).stop().animate({color: '#CCC'}, 250);
  });
  
  $(linkImg32).mouseenter(function() {
    $(this).stop().animate({opacity: 0.7 }, 150);
    $(slider).stop().animate({left: $(this).position().left}, 250, 'easeOutQuad');
  });
  $(linkImg32).mouseleave(function() {
    $(this).stop().animate({opacity: 1.0}, 150);
  });  
  
  $(mikespan).click(function() {
    window.open(urlGithub, '_blank');
  });
  
  buttons = $(linkImg32);
  activeButtonIdx = 0;
  activeButton = buttons[activeButtonIdx];
  $(slider).css({ left: $(activeButton).position().left });
  
  $(window).keydown(function(e) {
    const { keyCode } = e;
    let activeButton = buttons[activeButtonIdx];
    const firstChild = activeButton.children[0];
    let animate = false;

    switch (keyCode) {
      case ENTER: {
        firstChild.click();
        break;
      }
      case LEFT_ARROW: {
        if (activeButtonIdx > 0) {
          activeButtonIdx--;
          animate = true;
        }
        break;
      }
      case RIGHT_ARROW: {
        if (activeButtonIdx < buttons.length - 1) {
          activeButtonIdx++;
          animate = true;
          break;
        }
      }
    }

    if (animate) {
      activeButton = buttons[activeButtonIdx];
      $('#slider').stop().animate({ left: $(activeButton).position().left }, 250, 'easeOutQuad');
    }
  });
});