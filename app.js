var main = function() {
  $('.oh-seven').click(function() {
    $('.tourney-oh-seven').toggleClass('hidden');
  });
  
  $('.oh-eight').click(function() {
    $('.tourney-oh-eight').toggleClass('hidden');
  });

}

$(document).ready(main);
