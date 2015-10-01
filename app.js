var main = function() {
  $('.oh-seven').click(function() {
    $('.tourney-oh-seven').animate({height: 100%}, 1000);
    $('.tourney-oh-eight').hide(1000);
  });
  
  $('.oh-eight').click(function() {
    $('.tourney-oh-eight').toggleClass('hidden');
    $('.tourney-oh-seven').addClass('hidden');
  });

}

$(document).ready(main);
