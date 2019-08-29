var clickedColor = '';

var computerColors = ['black', 'yellow', 'orange', 'red'];

function newGame() {
    
    $(".clickableTarget").removeClass('red');
    $(".clickableTarget").removeClass('green');
    $(".clickableTarget").removeClass('blue');
    $(".clickableTarget").removeClass('yellow');
    $(".clickableTarget").removeClass('brown');
    $(".clickableTarget").removeClass('orange');
    $(".clickableTarget").removeClass('black');
    $(".clickableTarget").removeClass('white');

    for(i = 0; i < computerColors.length; i++) {
        var slot = 'slot' + (i + 1);
        $('.' + slot).addClass(computerColors[i]);

    }
    
}

function checkAnswer() {
    alert($('.target1').attr('color'));
}

$(document).ready(function()
    {
        $('.clickable').click(function() {
            // alert($(this).attr('color'));
            clickedColor = $(this).attr('color');
        });

        $('.clickableTarget').click(function() {
            if (clickedColor != '') {
                $(this).addClass(clickedColor);
                clickedColor = '';
                $(this).removeClass('defaultColor');
                $(this).attr('color', clickedColor)

            } else {
                $(this).addClass('defaultColor');
                $(this).attr('color', '');

            }
        })
    }


);

