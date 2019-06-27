import $ from 'jquery';

$(document).ready(function () {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  $('button').click(function () {
    let input = $('input').val();
    let date = new Date(input);
    $('.output').text(days[date.getDay()]);
  });
});
