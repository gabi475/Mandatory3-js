$(document).ready(function() {

  let pl_x = 0;
  let box = $('.box');
  let x = "x";
  let o = "o";
  let turns = 0;
  let pl_o = 0;

  let sitio1 = $('#box1');
  let sitio2 = $('#box2');
  let sitio3 = $('#box3');
  let sitio4 = $('#box4');
  let sitio5 = $('#box5');
  let sitio6 = $('#box6');
  let sitio7 = $('#box7');
  let sitio8 = $('#box8');
  let sitio9 = $('#box9');

  //----------vem vinner----funk.------------
  $(box).on('click', function() {
      // check rows-----
    if (sitio1.hasClass("o") && sitio2.hasClass("o") && sitio3.hasClass("o") ||
      sitio4.hasClass("o") && sitio5.hasClass("o") && sitio6.hasClass("o") ||
      sitio7.hasClass("o") && sitio8.hasClass("o") && sitio9.hasClass("o") ||
      // check columns
      sitio1.hasClass("o") && sitio4.hasClass("o") && sitio7.hasClass("o") ||
      sitio2.hasClass("o") && sitio5.hasClass("o") && sitio8.hasClass("o") ||
      sitio3.hasClass("o") && sitio6.hasClass("o") && sitio9.hasClass("o") ||
      // check diagonals
      sitio1.hasClass("o") && sitio5.hasClass("o") && sitio9.hasClass("o") ||
      sitio3.hasClass("o") && sitio5.hasClass("o") && sitio7.hasClass("o")) {

      $(box).text("");
      $(box).removeClass('disable');
      $(box).removeClass('o');
      $(box).removeClass('x');

      // check rows-----
    } else if (sitio1.hasClass("x") && sitio2.hasClass("x") && sitio3.hasClass("x") ||
      sitio4.hasClass("x") && sitio5.hasClass("x") && sitio6.hasClass("x") ||
      sitio7.hasClass("x") && sitio8.hasClass("x") && sitio9.hasClass("x") ||
      // check columns
      sitio1.hasClass("x") && space4.hasClass("x") && sitio7.hasClass("x") ||
      sitio2.hasClass("x") && sitio5.hasClass("x") && sitio8.hasClass("x") ||
      sitio3.hasClass("x") && sitio6.hasClass("x") && sitio9.hasClass("x") ||
      // check diagonals
      sitio1.hasClass("x") && space5.hasClass("x") && sitio9.hasClass("x") ||
      sitio3.hasClass("x") && sitio5.hasClass("x") && sitio7.hasClass("x")) {

      $(box).text("");
      $(box).removeClass('disable');
      $(box).removeClass('o');
      $(box).removeClass('x');

      //--------check if  space is filled------------
    } else if (turns === 9) {
      alert('Tie Game!');
      $(box).text("");
      $(box).removeClass('disable');
      $(box).removeClass('o');
      $(box).removeClass('x');
      turns = 0;
    } else if ($(this).hasClass('disable')) {
      alert('This space is filled!');

    } else if (turns % 2 === 0) {
      turns++;
      $(this).text(o);
      $(this).addClass('disable o');

        // check rows-----
      if (sitio1.hasClass("o") && sitio2.hasClass("o") && sitio3.hasClass("o") ||
        sitio4.hasClass("o") && sitio5.hasClass("o") && sitio6.hasClass("o") ||
        sitio7.hasClass("o") && sitio8.hasClass("o") && sitio9.hasClass("o") ||
        // check columns
        sitio1.hasClass("o") && space4.hasClass("o") && sitio7.hasClass("o") ||
        sitio2.hasClass("o") && sitio5.hasClass("o") && sitio8.hasClass("o") ||
        sitio3.hasClass("o") && sitio6.hasClass("o") && sitio9.hasClass("o") ||
        // check diagonals
        sitio1.hasClass("o") && space5.hasClass("o") && sitio9.hasClass("o") ||
        sitio3.hasClass("o") && sitio5.hasClass("o") && sitio7.hasClass("o")) {

        alert('Winner: o');
        pl_o++;
        $('.player_1').text(pl_o);
        $(box).text("");
        $(box).removeClass('disable');
        $(box).removeClass('o');
        $(box).removeClass('x');
        turns = 0;
      }

    } else {
      turns++;
      $(this).text(x);
      $(this).addClass('disable x');

        // check rows-----
      if (sitio1.hasClass("x") && sitio2.hasClass("x") && sitio3.hasClass("x") ||
        sitio4.hasClass("x") && sitio5.hasClass("x") && sitio6.hasClass("x") ||
        sitio7.hasClass("x") && sitio8.hasClass("x") && sitio9.hasClass("x") ||
        // check columns
        sitio1.hasClass("x") && sitio4.hasClass("x") && sitio7.hasClass("x") ||
        sitio2.hasClass("x") && sitio5.hasClass("x") && sitio8.hasClass("x") ||
        sitio3.hasClass("x") && sitio6.hasClass("x") && sitio9.hasClass("x") ||
        // check diagonals
        sitio1.hasClass("x") && sitio5.hasClass("x") && sitio9.hasClass("x") ||
        sitio3.hasClass("x") && sitio5.hasClass("x") && sitio7.hasClass("x")) {

        alert('Winner: x');
        pl_x++;
        $('.gamer_2').text(pl_x);
        $(box).text("");
        $(box).removeClass('disable');
        $(box).removeClass('o');
        $(box).removeClass('x');
        turns = 0;
      }
    }
  });

  //---------------Reset----------------
  $('#button').click(function(e) {
    $(box).text("");
    $(box).removeClass('disable');
    $(box).removeClass('o');
    $(box).removeClass('x');
    turns = 0;
    pl_o = 0;
    pl_x = 0;
    $('.gamer_2').text("0");
    $('.gamer_1').text("0");
  });

});
