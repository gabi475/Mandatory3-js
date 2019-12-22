$(document).ready(function() {
  let x = "x";
  let o = "o";
  let turns = 0;
  let pl_o = 0;
  let pl_x = 0;
  let cell = $('.cell');

  let space1 = $('#cell1');
  let space2 = $('#cell2');
  let space3 = $('#cell3');
  let space4 = $('#cell4');
  let space5 = $('#cell5');
  let space6 = $('#cell6');
  let space7 = $('#cell7');
  let space8 = $('#cell8');
  let space9 = $('#cell9');

  //----------vem vinner----funk.------------
  $(cell).on('click', function() {
      // check rows-----
    if (space1.hasClass("o") && space2.hasClass("o") && space3.hasClass("o") ||
      space4.hasClass("o") && space5.hasClass("o") && space6.hasClass("o") ||
      space7.hasClass("o") && space8.hasClass("o") && space9.hasClass("o") ||
      // check columns
      space1.hasClass("o") && space4.hasClass("o") && space7.hasClass("o") ||
      space2.hasClass("o") && space5.hasClass("o") && space8.hasClass("o") ||
      space3.hasClass("o") && space6.hasClass("o") && space9.hasClass("o") ||
      // check diagonals
      space1.hasClass("o") && space5.hasClass("o") && space9.hasClass("o") ||
      space3.hasClass("o") && space5.hasClass("o") && space7.hasClass("o")) {

      $(cell).text("");
      $(cell).removeClass('disable');
      $(cell).removeClass('o');
      $(cell).removeClass('x');

      // check rows-----
    } else if (space1.hasClass("x") && space2.hasClass("x") && space3.hasClass("x") ||
      space4.hasClass("x") && space5.hasClass("x") && space6.hasClass("x") ||
      space7.hasClass("x") && space8.hasClass("x") && space9.hasClass("x") ||
      // check columns
      space1.hasClass("x") && space4.hasClass("x") && space7.hasClass("x") ||
      space2.hasClass("x") && space5.hasClass("x") && space8.hasClass("x") ||
      space3.hasClass("x") && space6.hasClass("x") && space9.hasClass("x") ||
      // check diagonals
      space1.hasClass("x") && space5.hasClass("x") && space9.hasClass("x") ||
      space3.hasClass("x") && space5.hasClass("x") && space7.hasClass("x")) {

      $(cell).text("");
      $(cell).removeClass('disable');
      $(cell).removeClass('o');
      $(cell).removeClass('x');

      //--------check if  space is filled------------
    } else if (turns === 9) {
      alert('Tie Game!');
      $(cell).text("");
      $(cell).removeClass('disable');
      $(cell).removeClass('o');
      $(cell).removeClass('x');
      turns = 0;
    } else if ($(this).hasClass('disable')) {
      alert('This space is filled!');

    } else if (turns % 2 === 0) {
      turns++;
      $(this).text(o);
      $(this).addClass('disable o');

        // check rows-----
      if (space1.hasClass("o") && space2.hasClass("o") && space3.hasClass("o") ||
        space4.hasClass("o") && space5.hasClass("o") && space6.hasClass("o") ||
        space7.hasClass("o") && space8.hasClass("o") && space9.hasClass("o") ||
        // check columns
        space1.hasClass("o") && space4.hasClass("o") && space7.hasClass("o") ||
        space2.hasClass("o") && space5.hasClass("o") && space8.hasClass("o") ||
        space3.hasClass("o") && space6.hasClass("o") && space9.hasClass("o") ||
        // check diagonals
        space1.hasClass("o") && space5.hasClass("o") && space9.hasClass("o") ||
        space3.hasClass("o") && space5.hasClass("o") && space7.hasClass("o")) {

        alert('Winner: o');
        pl_o++;
        $('.player_1').text(pl_o);
        $(cell).text("");
        $(cell).removeClass('disable');
        $(cell).removeClass('o');
        $(cell).removeClass('x');
        turns = 0;
      }

    } else {
      turns++;
      $(this).text(x);
      $(this).addClass('disable x');

        // check rows-----
      if (space1.hasClass("x") && space2.hasClass("x") && space3.hasClass("x") ||
        space4.hasClass("x") && space5.hasClass("x") && space6.hasClass("x") ||
        space7.hasClass("x") && space8.hasClass("x") && space9.hasClass("x") ||
        // check columns
        space1.hasClass("x") && space4.hasClass("x") && space7.hasClass("x") ||
        space2.hasClass("x") && space5.hasClass("x") && space8.hasClass("x") ||
        space3.hasClass("x") && space6.hasClass("x") && space9.hasClass("x") ||
        // check diagonals
        space1.hasClass("x") && space5.hasClass("x") && space9.hasClass("x") ||
        space3.hasClass("x") && space5.hasClass("x") && space7.hasClass("x")) {

        alert('Winner: x');
        pl_x++;
        $('.player_2').text(pl_x);
        $(cell).text("");
        $(cell).removeClass('disable');
        $(cell).removeClass('o');
        $(cell).removeClass('x');
        turns = 0;
      }
    }
  });

  //---------------Reset----------------
  $('#button').click(function(e) {
    $(cell).text("");
    $(cell).removeClass('disable');
    $(cell).removeClass('o');
    $(cell).removeClass('x');
    turns = 0;
    pl_o = 0;
    pl_x = 0;
    $('.player_2').text("0");
    $('.player_1').text("0");
  });

});
