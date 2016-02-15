var app = angular.module('WordTourney', []);

var main = function() {
  $('.oh-seven').click(function() {
    $('.tourney-oh-seven').toggleClass('hidden');
    $('.tourney-oh-eight').addClass('hidden');
  });
  
  $('.oh-eight').click(function() {
    $('.tourney-oh-eight').toggleClass('hidden');
    $('.tourney-oh-seven').addClass('hidden');
  });

  $('[data-toggle="tooltip"]').tooltip();
  
}

$(document).ready(main);
